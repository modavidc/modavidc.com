private AllergyAlert CheckAllergyClass(int rxCUI, string patientId)
{
    const string query = @"
        SELECT a.SNOMEDCTClass, a.AlertLevel, a.MedicationName
        FROM tblAllergyClassDrugTemplate a
        INNER JOIN tblPatientAllergies p
            ON p.SNOMEDCTClass = a.SNOMEDCTClass
        WHERE a.RxCUI = @rxCUI
          AND p.PatientID = @patientId
          AND a.AlertLevel IN ('WARNING', 'CRITICAL')";

    using var conn = new SqlConnection(_nlmConnectionString);
    conn.Open();

    using var cmd = new SqlCommand(query, conn) { CommandType = CommandType.Text };
    cmd.Parameters.Add("@rxCUI", SqlDbType.Int).Value = rxCUI;
    cmd.Parameters.Add("@patientId", SqlDbType.VarChar, 50).Value = patientId;

    using var reader = cmd.ExecuteReader();

    if (!reader.Read()) return AllergyAlert.None;

    return new AllergyAlert
    {
        SNOMEDCTClass = reader.GetString(reader.GetOrdinal("SNOMEDCTClass")),
        Level = reader.GetString(reader.GetOrdinal("AlertLevel")),
        MedicationName = reader.GetString(reader.GetOrdinal("MedicationName")),
    };
}

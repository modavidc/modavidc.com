Create a professional AWS enterprise architecture diagram using official AWS service icons.

Style:
- AWS reference architecture style
- White background
- Enterprise healthcare integration diagram
- Minimalistic
- Clean arrows and networking flow
- Structured layout with AWS Cloud boundary
- No futuristic UI
- No gradients
- No glassmorphism

Architecture:
- Single Availability Zone only
- No Load Balancer
- No AWS WAF
- No Auto Scaling
- No Multi-AZ
- No ECS or Lambda

Inside AWS Cloud:
- VPC 10.0.0.0/16
- Route 53
- Public subnet with EC2 Ubuntu instance running Laravel prescriptions-api
- Private subnet with EC2 DB Pool connected to multiple databases
- Amazon S3
- Amazon SNS

Monitoring & Observability section INSIDE AWS Cloud:
- Amazon CloudWatch
- AWS CloudTrail
- Sentry

AWS Security & Compliance section INSIDE AWS Cloud beside Monitoring:
- AWS IAM
- AWS KMS

Outside AWS Cloud:
- Doctor workstation
- abcEHR Desktop (.NET)
- On-premise Windows Server
- SQL Server
- Surescripts Network
- Pharmacies
- End-to-End Flow panel
- Security & Compliance Patterns panel
- Supported Transactions panel

Security:
- mTLS 1.2+
- TLS 1.2
- AES-256 encryption
- IP whitelisting
- Security Groups

Show secure healthcare integration to Surescripts using NCPDP SCRIPT transactions.

Use numbered arrows showing:
1. Doctor request
2. Route 53 routing
3. Laravel API processing
4. DB Pool communication
5. Secure mTLS connection
6. NCPDP transaction sent
7. ACK/NACK response returned

Supported Transactions:
- NewRx
- RefillRx
- CancelRx
- RxChange
- RxRenewal
- RxHistory

Professional healthcare enterprise architecture aesthetic.
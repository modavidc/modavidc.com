# ✅ AWS Cloud – Projects TODO List

> Para copiar/pegar en tu portfolio y que Cursor genere las cards

---

## 1. SecureCard – Security Pillar (Security First Architecture)

### Pasos de implementación:

- Deploy insecure sample app
- Create custom VPC (public/private subnets)
- Migrate EC2 to private subnet
- Add ALB + Bastion Host
- Secure RDS (private connectivity + encryption)
- Secure S3 (block public access + encryption)
- Add AWS WAF in front of ALB

### Resultado final:
> Secure enterprise-grade architecture

---

## 2. MedicareHub – Reliability Pillar (Highly Available System)

### Pasos de implementación:

- Create EC2 Launch Template
- Configure Auto Scaling Groups (multi-AZ)
- Add Application Load Balancer
- Deploy Multi-AZ RDS
- Configure Route 53 DNS failover
- Add EFS for shared storage

### Resultado final:
> Fault-tolerant architecture with self-healing

---

## 3. ChatOpsBot – Operational Excellence (AWS Alerts to Slack)

### Pasos de implementación:

- Connect Slack workspace via AWS Chatbot
- Create Lambda functions for automated ops tasks
- Create SSM Run Command documents
- Configure CloudWatch alarms
- Route alerts through EventBridge
- Assign IAM roles with fine-grained permissions
- Optional: CloudWatch dashboard + CloudFront

### Resultado final:
> Real-time Slack alert & command system

---

## 4. CoffeeShop Manager – Performance Efficiency (Full Serverless App)

### Pasos de implementación:

- Create DynamoDB table (inventory)
- Build Lambda functions + shared layers
- Create REST API with API Gateway
- Develop React frontend
- Deploy frontend with AWS Amplify
- Configure CORS & monitoring

### Resultado final:
> Fully serverless, auto-scaling, pay-per-use inventory system

---

## 5. CostGuardian – Cost Optimization Automation

### Pasos de implementación:

- Deploy intentionally wasteful infra via CloudFormation
- Detect leaks via CloudWatch metrics + Trusted Advisor
- Build SSM automation documents with Python cleanup scripts
- Configure IAM roles + SNS notifications
- Apply automated cleanup pipeline
- Add S3 lifecycle policies

### Resultado final:
> Automated cost governance system

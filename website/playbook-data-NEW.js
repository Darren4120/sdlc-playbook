// SDLC Playbook Data Structure  
// Generated from Lean Agile SDLC Excel Playbook
// Phases: Discovery, Build & Test, Continuous Deployment, Release on Demand

const playbookData = {
    'discovery': {
        id: 'discovery',
        title: '1. Discovery - Understanding & Aligning',
        description: 'The discovery phase is driven by the Lean Startup cycle. Focus on hypothesis-driven increments, rapid prototyping, and validated learning.',
        categories: [
            {
                name: 'The Learning Cycle - Lean Startup',
                isDiagram: true,
                diagramOutcome: 'The Lean Startup cycle doesn\'t produce features—it produces clarity on what to build next. Learning → Decision → Direction',
                tasks: []
            },
            {
                name: 'The North Star - Strategic Theme and Vision',
                tasks: [
                    {
                        title: 'Define strategic level business Objectives',
                        responsible: 'Business Owner',
                        outcome: 'it?s aligned direction that drives measurable business impact across the organization.'
                    },
                    {
                        title: 'Establish product vision',
                        responsible: 'Product Manager',
                        outcome: 'A product vision creates shared direction and purpose, enabling teams to build the right product for the right customer outcomes. The vision drives: Vision ? Strategy ? Roadmap ? Backlog.'
                    }
                ]
            },
            {
                name: 'Portfolio Backlog - Epics',
                groupedOutcome: 'It aligns Strategy to Execution. Portfolio epics convert strategy into prioritized, outcome-driven investments that guide execution at scale.  Strategic Alignment + Focused Investment + Measurable Business Value',
                tasks: [
                    {
                        title: 'Classify epics (Functional/Non-Functional)',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Write epic summary and description',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Define business outcomes',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Establish acceptance criteria',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Identify leading indicators',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Document non-functional requirements',
                        responsible: 'Product Manager'
                    }
                ]
            },
            {
                name: 'Customer Centric - Design Thinking',
                groupedOutcome: 'Design Thinking ensures we solve the right problem with solutions customers truly value. Empathy ? Problem Clarity ? Validated User-Centric Solution',
                tasks: [
                    {
                        title: 'Conduct Gemba/Interviews',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Create user personas',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Build empathy maps',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Map customer journey',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Define features',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Design architecture',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Document customer problem',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Define business impact',
                        responsible: 'Product Manager'
                    }
                ]
            },
            {
                name: 'Setup Portfolio Kanban',
                groupedOutcome: 'Portfolio Kanban brings transparency and flow to strategic initiatives, enabling better prioritization and faster value delivery. Visibility + Flow + Focus + Better Investment Decisions',
                tasks: [
                    {
                        title: 'Configure portfolio Kanban board',
                        responsible: 'Agile Coach'
                    },
                    {
                        title: 'Define work item types',
                        responsible: 'Agile Coach'
                    },
                    {
                        title: 'Establish WIP limits',
                        responsible: 'Agile Coach'
                    }
                ]
            },
            {
                name: 'Roadmap and Release Planning',
                groupedOutcome: '',
                tasks: [
                    {
                        title: 'Align features across timeline',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Calculate WSJF prioritization',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Identify risks and dependencies',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Create PI/Quarterly roadmap',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Define 2-3 year solution roadmap',
                        responsible: 'Product Manager'
                    }
                ]
            },
            {
                name: 'Define Minimum Viable Product & Minimum Marketable Product',
                groupedOutcome: 'MVP helps us learn fast; MMP ensures we deliver enough value to succeed in the market. Faster Learning + Focused Build + Confident Market Launch',
                tasks: [
                    {
                        title: 'Define MVP for learning/validation',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Define MMP for market-ready value',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Align product goals with roadmap',
                        responsible: 'Product Manager'
                    }
                ]
            }
        ]
    },
    'build-test': {
        id: 'build-test',
        title: '2. Build & Test - Iterative Development',
        description: 'Build quality in from the start. Development teams work in short iterations, applying TDD, continuous integration, and collaborative practices.',
        categories: [
            {
                name: 'Features',
                groupedOutcome: 'A well-defined feature turns an idea into a deliverable unit of value with clear purpose and success criteria. Clear Value + Defined Scope + Execution Readiness',
                tasks: [
                    {
                        title: 'Write feature summary',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Document feature description',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Define benefit hypothesis',
                        responsible: 'Product Manager'
                    },
                    {
                        title: 'Establish feature acceptance criteria',
                        responsible: 'Product Manager'
                    }
                ]
            },
            {
                name: 'Software Engineering Excellence - Ways of Working',
                tasks: [
                    {
                        title: 'Backlog refinement',
                        responsible: 'Product Owner',
                        outcome: 'Backlog refinement ensures the team always has the right work, clearly defined and ready for development. Clear + Prioritized + Execution-Ready Backlog'
                    },
                    {
                        title: 'Apply UI/UX best practices & Wifeframes',
                        responsible: 'UX Designer',
                        outcome: 'Great UI/UX turns functionality into a seamless experience that users adopt, trust, and rely on. Intuitive Experience + Higher Adoption + Better Business Results'
                    },
                    {
                        title: 'Perform sprint/iteration planning',
                        responsible: 'Scrum Master',
                        outcome: 'Sprint planning ensures the team starts with clarity, focus, and a realistic plan to deliver value. Clear Sprint Goal. Clear Goal + Committed Work + Execution Readiness'
                    },
                    {
                        title: 'Write unit test cases (TDD)',
                        responsible: 'Developer',
                        outcome: 'TDD builds quality into the code from the start, enabling faster, safer, and more reliable delivery. Built-in Quality + Faster Feedback + Confident Delivery'
                    }
                ]
            },
            {
                name: 'Creating Story test case',
                tasks: [
                    {
                        title: 'Implement code',
                        responsible: 'Developer',
                        outcome: 'Source Code with functionality ready to deploy.'
                    }
                ]
            },
            {
                name: 'Understand branching strategy',
                tasks: [
                    {
                        title: 'Code commit in future branch & Create pull request',
                        responsible: 'Developer',
                        outcome: 'Commits and pull requests ensure code changes are integrated safely, reviewed thoroughly, and continuously improved. Controlled Integration + Quality Assurance + Collaboration'
                    },
                    {
                        title: 'Conduct peer review',
                        responsible: 'Tech Lead',
                        outcome: 'Peer reviews improve quality and spread knowledge, ensuring every change is better before it is merged. Better Quality + Early Defect Detection + Shared Ownership'
                    },
                    {
                        title: 'Commit to version control',
                        responsible: 'Developer',
                        outcome: 'Version control commits create a reliable history of changes, enabling safe collaboration and continuous delivery. Traceability + Safe Progress + Collaboration + Integration Readiness'
                    },
                    {
                        title: 'Execute Automation test cases in CI CD',
                        responsible: 'Automation in CI CD Pipeline',
                        outcome: 'Automated tests in CI/CD ensure every change is validated instantly, enabling fast and reliable delivery. Continuous Quality + Faster Feedback + Safer Releases'
                    }
                ]
            },
            {
                name: 'Close High & Critical reported bugs from sonar & Blackduck before next deployment',
                tasks: [
                    {
                        title: 'Deploy to Dev environment',
                        responsible: 'CI CD Pipeline',
                        outcome: 'Fast feedback, early validation, and a constantly usable system for development and testing. Fast Feedback + Early Validation + Continuous Integration'
                    }
                ]
            },
            {
                name: 'CI Pipeline Mechanics',
                tasks: [
                    {
                        title: 'Configure version control (GitHub/GitLab)',
                        responsible: 'DevOps Engineer',
                        outcome: 'Configuring version control establishes the foundation for secure, collaborative, and scalable software delivery. Centralized Code + Controlled Collaboration + DevOps Enablement'
                    },
                    {
                        title: 'Setup automated build triggers',
                        responsible: 'DevOps Engineer',
                        outcome: 'Automated build triggers ensure every change is instantly validated, enabling faster and more reliable delivery. Instant Builds + Fast Feedback + Reliable CI/CD Foundation'
                    },
                    {
                        title: 'Configure build tools (Maven/Gradle)',
                        responsible: 'DevOps Engineer',
                        outcome: 'Configuring build tools ensures every build is consistent, automated, and ready for seamless integration into the delivery pipeline. Standardized + Automated + Reliable Build Process'
                    },
                    {
                        title: 'Setup CI tools (Jenkins/GitHub Actions)',
                        responsible: 'DevOps Engineer',
                        outcome: 'CI tools ensure every code change is automatically integrated and validated, enabling faster and more reliable delivery. Automated Integration + Fast Feedback + Reliable Pipeline'
                    },
                    {
                        title: 'Implement unit test execution',
                        responsible: 'DevOps Engineer',
                        outcome: 'Unit test execution ensures every piece of code is validated early, enabling faster, safer, and higher-quality development. Early Bug Detection + Built-in Quality + Safe Development'
                    },
                    {
                        title: 'Configure static code analysis',
                        responsible: 'DevOps Engineer',
                        outcome: 'it?s continuous, automated enforcement of code quality and security before the code ever runs. Early Issue Detection + Improved Quality + Enhanced Security'
                    },
                    {
                        title: 'Setup artifact creation/storage',
                        responsible: 'DevOps Engineer',
                        outcome: 'it?s a controlled, traceable, and reusable way to manage build outputs across the delivery pipeline. Versioned Artifacts + Reliable Deployments + Full Traceability'
                    }
                ]
            },
            {
                name: 'Security as Non-Functional Requirement',
                tasks: [
                    {
                        title: 'Implement SAST (Static Application Security Testing)',
                        responsible: 'DevOps Engineer',
                        outcome: 'SAST ensures security vulnerabilities are identified early in development, enabling safer and more reliable software delivery. Early Vulnerability Detection + Built-in Security + Faster Mitigation'
                    },
                    {
                        title: 'Configure dependency scanning',
                        responsible: 'DevOps Engineer',
                        outcome: 'Dependency scanning ensures third-party risks are continuously identified and controlled before they impact production. Dependency Visibility + Risk Control + Continuous Security'
                    },
                    {
                        title: 'Setup secrets management',
                        responsible: 'DevOps Engineer',
                        outcome: 'Secrets management ensures sensitive data is securely stored, accessed, and managed?protecting the system from credential-related risks. Secure Secrets + Controlled Access + Reduced Risk'
                    }
                ]
            }
        ]
    },
    'cd': {
        id: 'cd',
        title: '3. Continuous Deployment - Automated Pipeline',
        description: 'Automate the deployment pipeline to enable fast, reliable releases. Focus on infrastructure as code, automated testing, and continuous monitoring.',
        categories: [
            {
                name: 'Deployment Flow',
                groupedOutcome: 'Infrastructure as Code enables fast, consistent, and reliable environment setup, making infrastructure scalable and fully controlled. Automated + Consistent + Scalable Infrastructure',
                tasks: [
                    {
                        title: 'Setup Infrastructure as Code (IaC)',
                        responsible: 'DevOps Engineer'
                    },
                    {
                        title: 'Configure Dev environment',
                        responsible: 'DevOps Engineer'
                    },
                    {
                        title: 'Configure QA environment',
                        responsible: 'DevOps Engineer'
                    },
                    {
                        title: 'Configure Staging environment',
                        responsible: 'DevOps Engineer'
                    },
                    {
                        title: 'Configure Production environment',
                        responsible: 'DevOps Engineer'
                    },
                    {
                        title: 'Implement automated promotion pipeline',
                        responsible: 'DevOps Engineer'
                    }
                ]
            },
            {
                name: ' Advanced Validation (Non-Functional Testing)',
                tasks: [
                    {
                        title: 'Execute performance testing',
                        responsible: 'Performance Engineer',
                        outcome: 'Performance testing ensures the system can handle real-world load reliably, delivering consistent and scalable user experience. Validated Performance + Scalability Confidence + Production Stability'
                    },
                    {
                        title: 'Execute load testing',
                        responsible: 'Performance Engineer',
                        outcome: 'Load testing ensures the system can handle expected user demand reliably without performance degradation. Validated Real-World Performance + Stability + Capacity Confidence'
                    },
                    {
                        title: 'Execute stress testing',
                        responsible: 'Performance Engineer',
                        outcome: 'Stress testing reveals how the system behaves beyond its limits, enabling teams to build resilient and failure-tolerant architectures. Known System Limits + Controlled Failure Behavior + Improved Resilience'
                    }
                ]
            },
            {
                name: 'Compliance',
                tasks: [
                    {
                        title: 'Execute DAST (Dynamic Application Security Testing)',
                        responsible: 'Security Engineer',
                        outcome: 'The outcome of executing DAST (Dynamic Application Security Testing) is not just a scan result?it?s validation of application security from an external attacker?s perspective while the system is running. Runtime Vulnerability Detection + Real Attack Simulation + Stronger Security'
                    },
                    {
                        title: 'Validate scalability',
                        responsible: 'Performance Engineer',
                        outcome: 'The outcome of validating scalability is not just a test result?it is confidence that the system can grow with increasing load while maintaining performance, stability, and efficiency. Proven Scalability + Stable Performance + Growth Confidence'
                    },
                    {
                        title: 'Test disaster recovery',
                        responsible: 'DevOps Engineer',
                        outcome: 'The outcome of testing disaster recovery (DR) is not just a successful drill?it is confidence that the system can recover quickly, safely, and completely after a major failure or outage. Proven Recovery + Controlled Data Loss + Business Continuity Assurance'
                    }
                ]
            },
            {
                name: 'Verification Before Release',
                tasks: [
                    {
                        title: 'Setup monitoring (Prometheus Grafana)',
                        responsible: 'DevOps Engineer',
                        outcome: 'The outcome of setting up monitoring using Prometheus and Grafana is not just dashboards?it is real-time visibility, proactive detection, and data-driven operational control over system health and performance. Real-Time Visibility + Faster Detection + Proactive Operations'
                    },
                    {
                        title: 'Configure logging. Validate deployment health via logs (ELK Stack Grafana)',
                        responsible: 'DevOps Engineer',
                        outcome: 'The outcome of configuring logging and validating deployment health using logs (e.g., Elasticsearch, Logstash, Kibana / Grafana) is not just log collection?it is complete visibility into system behavior with the ability to detect, diagnose, and validate deployment health in real time. Centralized Logs + Deployment Validation + Faster Debugging + Full Visibility'
                    },
                    {
                        title: 'Implement tracing Telemetrics (Jaeger)',
                        responsible: 'DevOps Engineer',
                        outcome: 'The outcome of implementing tracing (telemetry) using Jaeger is not just tracking requests?it is end-to-end visibility of how requests flow through distributed systems, enabling fast diagnosis of performance and failure issues. End-to-End Visibility + Faster Debugging + Performance Optimization'
                    },
                    {
                        title: 'Review metrics and alerts',
                        responsible: 'DevOps Engineer',
                        outcome: 'The outcome of reviewing metrics and alerts is not just looking at dashboards?it is turning operational data into actionable insights that improve system reliability, performance, and business outcomes. Early Detection + Faster Response + Data-Driven Optimization'
                    },
                    {
                        title: 'Verify system readiness',
                        responsible: 'Release Manager',
                        outcome: 'The outcome of verifying system readiness is not just a checklist completion?it is confidence that the system is fully prepared, stable, secure, and capable of handling production workloads before release. Production-Ready + Risk-Free + Fully Validated System'
                    }
                ]
            }
        ]
    },
    'rod': {
        id: 'rod',
        title: '4. Release on Demand - Controlled Release',
        description: 'Decouple deployment from release. Use feature flags, canary releases, and data-driven decisions to release value safely and strategically.',
        categories: [
            {
                name: ' Strategic Release',
                tasks: [
                    {
                        title: 'Decouple deployment from release',
                        responsible: 'Release Manager',
                        outcome: 'Decoupling deployment from release enables faster delivery while giving the business full control over when features reach users. Controlled Releases + Reduced Risk + Faster Delivery + Better Experimentation'
                    },
                    {
                        title: 'Implement feature toggles',
                        responsible: 'Tech Lead',
                        outcome: 'The outcome of implementing feature toggles (feature flags) is not just conditional code?it?s real-time control over feature exposure, enabling safer releases, experimentation, and faster delivery. Controlled Release + Reduced Risk + Faster Delivery + Experimentation'
                    },
                    {
                        title: 'Setup A/B testing framework',
                        responsible: 'Product Manager',
                        outcome: 'The outcome of setting up an A/B testing framework is not just running experiments?it?s enabling data-driven decisions by validating which product changes actually improve user behavior and business outcomes. Experimentation + Data-Driven Decisions + Improved Customer & Business Outcomes'
                    },
                    {
                        title: 'Plan phased rollout strategy',
                        responsible: 'Release Manager',
                        outcome: 'The outcome of planning a phased rollout strategy is not just a rollout plan?it?s a controlled, low-risk way to introduce changes while continuously validating impact and maintaining system stability. Controlled Rollout + Reduced Risk + Faster Feedback + Confident Releases'
                    },
                    {
                        title: 'Configure canary deployments',
                        responsible: 'DevOps Engineer',
                        outcome: 'Canary deployments enable safe, incremental releases by validating changes with real users before full rollout. Safe Release + Early Detection + Data-Driven Rollout + Fast Recovery'
                    },
                    {
                        title: 'Establish rollback procedures',
                        responsible: 'DevOps Engineer',
                        outcome: 'Rollback procedures ensure that any failure can be quickly reversed, minimizing impact and enabling safe, continuous delivery. Fast Recovery + Reduced Risk + Confident Releases'
                    }
                ]
            },
            {
                name: 'Stability and Enduring Value',
                tasks: [
                    {
                        title: 'Define SLAs/SLOs',
                        responsible: 'Service Manager',
                        outcome: 'Defining SLAs and SLOs establishes clear reliability commitments, aligning business expectations with engineering performance. Measurable Reliability + Business Alignment + Data-Driven Operations'
                    },
                    {
                        title: 'Monitor SLA compliance',
                        responsible: 'DevOps Engineer',
                        outcome: 'Monitoring SLA compliance ensures service commitments are consistently met, enabling proactive action and maintaining customer trust. SLA Assurance + Early Detection + Faster Response + Continuous Improvement'
                    },
                    {
                        title: 'Implement incident management',
                        responsible: 'Service Manager',
                        outcome: 'The outcome of implementing incident management is not just handling outages?it?s a structured, repeatable way to detect, respond to, resolve, and learn from incidents to minimize impact and improve system reliability over time. Faster Resolution + Reduced Impact + Continuous Improvement'
                    },
                    {
                        title: 'Execute continuous patching',
                        responsible: 'DevOps Engineer',
                        outcome: 'Continuous patching ensures systems remain secure, stable, and up to date by proactively addressing vulnerabilities with minimal disruption. Continuous Security + Stability + Compliance + Reduced Risk'
                    },
                    {
                        title: 'Conduct post-release reviews',
                        responsible: 'Release Manager',
                        outcome: 'The outcome of conducting post-release reviews is not just a retrospective?it?s turning every release into a learning opportunity that improves future delivery, quality, and reliability. Learning + Improvement + Better Quality + Stronger Processes'
                    },
                    {
                        title: 'Maintain system stability',
                        responsible: 'DevOps Team',
                        outcome: 'The outcome of maintaining system stability is not just keeping the system running?it?s ensuring consistent, reliable, and predictable system behavior under all operating conditions. Reliable Operation + High Availability + Consistent Performance'
                    }
                ]
            },
            {
                name: 'Closing the Loop - Feedback to CE',
                tasks: [
                    {
                        title: 'Collect user engagement metrics',
                        responsible: 'Product Manager',
                        outcome: 'The outcome of collecting user engagement metrics is not just gathering data?it?s understanding how users actually interact with your product, enabling informed decisions that improve experience and business outcomes. User Insights + Better Decisions + Improved Experience + Business Growth'
                    },
                    {
                        title: 'Track conversion rates',
                        responsible: 'Product Manager',
                        outcome: 'The outcome of tracking conversion rates is not just measuring percentages?it?s understanding how effectively your product turns user actions into meaningful business outcomes. Measurable Business Impact + Funnel Insights + Improved Conversion + Revenue Growth'
                    },
                    {
                        title: 'Analyze real usage data',
                        responsible: 'Data Analyst',
                        outcome: 'Analyzing real usage data turns customer behavior into actionable insights, enabling continuous product and business improvement. Real User Insights + Better Decisions + Improved Experience + Business Growth'
                    },
                    {
                        title: 'Generate insights and improvements',
                        responsible: 'Product Owner',
                        outcome: 'The outcome of generating insights and improvements is not just analysis?it?s turning data into concrete actions that enhance product value, user experience, and business performance. Actionable Insights + Continuous Improvement + Better Experience + Business Growth'
                    }
                ]
            }
        ]
    }
};

// Role Mapping for filtering
const roleMapping = {
    'product-owner': ['Product Owner', 'Product Manager', 'Product Strategy', 'Product Team'],
    'scrum-master': ['Scrum Master', 'Agile Coach', 'Scrum Team'],
    'tech-lead': ['Tech Lead', 'Solution Architect', 'Solution Architecture'],
    'developer': ['Developer', 'Development Team', 'Dev Team'],
    'qa-engineer': ['QA Engineer', 'Performance Engineer', 'QA'],
    'devops-engineer': ['DevOps Engineer', 'DevOps Team', 'Release Manager', 'DevOps'],
    'security-engineer': ['Security Engineer', 'Security Team'],
    'ux-designer': ['UX Designer', 'UX Researcher', 'UX Team'],
    'business-analyst': ['Business Analyst', 'Data Analyst', 'Business Owner'],
    'project-manager': ['Project Manager', 'Service Manager', 'Leadership', 'Executive Leadership', 'Leadership Team'],
    'all': []
};

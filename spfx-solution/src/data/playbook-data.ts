// SDLC Playbook Data Structure
// Based on Lean-Agile Framework

const playbookData = {
    discovery: {
        id: 'discovery',
        title: '1. Discovery – Understanding & Aligning',
        description: 'The discovery phase is driven by the Lean Startup cycle: Build → Measure → Learn',
        categories: [
            {
                name: '1.1 The Learning Cycle – Lean Startup',
                tasks: [
                    {
                        title: 'Define hypothesis-driven increments',
                        responsible: 'Product Owner',
                        deliverable: 'Hypothesis Document',
                        priority: 'high',
                        description: 'Create prototypes and MVPs based on validated hypotheses'
                    },
                    {
                        title: 'Build prototypes/MVPs',
                        responsible: 'Development Team',
                        deliverable: 'MVP/Prototype',
                        priority: 'high',
                        description: 'Develop minimum viable products for testing'
                    },
                    {
                        title: 'Measure user behavior and feedback',
                        responsible: 'Product Manager',
                        deliverable: 'Metrics Dashboard',
                        priority: 'high',
                        description: 'Capture and analyze user behavior data'
                    },
                    {
                        title: 'Learn and validate insights',
                        responsible: 'Product Owner',
                        deliverable: 'Learning Report',
                        priority: 'high',
                        description: 'Analyze data and validate or invalidate hypotheses'
                    },
                    {
                        title: 'Decide: Persevere or Pivot',
                        responsible: 'Leadership',
                        deliverable: 'Decision Document',
                        priority: 'high',
                        description: 'Make strategic decision based on learning'
                    }
                ]
            },
            {
                name: '1.2 The North Star – Business Goal & Vision',
                tasks: [
                    {
                        title: 'Define business-level strategic goal',
                        responsible: 'Executive Leadership',
                        deliverable: 'Strategic Goal Doc',
                        priority: 'high',
                        description: 'Establish overarching business objectives'
                    },
                    {
                        title: 'Establish product vision',
                        responsible: 'Product Owner',
                        deliverable: 'Vision Statement',
                        priority: 'high',
                        description: 'Create long-term aspirational product vision'
                    },
                    {
                        title: 'Align vision with business strategy',
                        responsible: 'Leadership Team',
                        deliverable: 'Alignment Document',
                        priority: 'high',
                        description: 'Ensure product vision supports business strategy'
                    }
                ]
            },
            {
                name: '1.3 The Epics',
                tasks: [
                    {
                        title: 'Classify epics (Functional/Non-Functional)',
                        responsible: 'Product Owner',
                        deliverable: 'Epic Classification',
                        priority: 'high',
                        description: 'Categorize epics by type and business value'
                    },
                    {
                        title: 'Write epic summary and description',
                        responsible: 'Product Owner',
                        deliverable: 'Epic Documents',
                        priority: 'high',
                        description: 'Document comprehensive epic details'
                    },
                    {
                        title: 'Define business outcomes',
                        responsible: 'Product Owner',
                        deliverable: 'Outcomes Document',
                        priority: 'high',
                        description: 'Identify expected business results'
                    },
                    {
                        title: 'Establish acceptance criteria',
                        responsible: 'Product Owner',
                        deliverable: 'Acceptance Criteria',
                        priority: 'high',
                        description: 'Define clear success criteria for epics'
                    },
                    {
                        title: 'Identify leading indicators',
                        responsible: 'Product Manager',
                        deliverable: 'KPI/Metrics List',
                        priority: 'high',
                        description: 'Define metrics to track epic progress'
                    },
                    {
                        title: 'Document non-functional requirements',
                        responsible: 'Solution Architect',
                        deliverable: 'NFR Document',
                        priority: 'high',
                        description: 'Specify performance, security, and quality requirements'
                    }
                ]
            },
            {
                name: '1.4 Ideation – Design Thinking',
                tasks: [
                    {
                        title: 'Conduct Gemba/Interviews',
                        responsible: 'UX Researcher',
                        deliverable: 'Interview Notes',
                        priority: 'high',
                        description: 'Observe users in their environment and conduct interviews'
                    },
                    {
                        title: 'Create user personas',
                        responsible: 'UX Designer',
                        deliverable: 'Persona Documents',
                        priority: 'high',
                        description: 'Develop detailed user persona profiles'
                    },
                    {
                        title: 'Build empathy maps',
                        responsible: 'UX Team',
                        deliverable: 'Empathy Maps',
                        priority: 'high',
                        description: 'Understand user pain points and emotions'
                    },
                    {
                        title: 'Map customer journey',
                        responsible: 'UX Designer',
                        deliverable: 'Journey Maps',
                        priority: 'high',
                        description: 'Visualize end-to-end customer experience'
                    },
                    {
                        title: 'Define features',
                        responsible: 'Product Owner',
                        deliverable: 'Feature List',
                        priority: 'high',
                        description: 'Identify and prioritize product features'
                    },
                    {
                        title: 'Design architecture',
                        responsible: 'Solution Architect',
                        deliverable: 'Architecture Doc',
                        priority: 'high',
                        description: 'Create high-level system architecture'
                    },
                    {
                        title: 'Document customer problem',
                        responsible: 'Product Manager',
                        deliverable: 'Problem Statement',
                        priority: 'high',
                        description: 'Clearly articulate the problem being solved'
                    },
                    {
                        title: 'Define business impact',
                        responsible: 'Product Owner',
                        deliverable: 'Impact Analysis',
                        priority: 'high',
                        description: 'Quantify expected business benefits'
                    }
                ]
            },
            {
                name: '1.5 Setup Portfolio Kanban',
                tasks: [
                    {
                        title: 'Configure portfolio Kanban board',
                        responsible: 'Agile Coach',
                        deliverable: 'Kanban Board',
                        priority: 'high',
                        description: 'Set up visual management system for portfolio'
                    },
                    {
                        title: 'Define work item types',
                        responsible: 'Agile Coach',
                        deliverable: 'Work Item Definitions',
                        priority: 'medium',
                        description: 'Establish categories for different work types'
                    },
                    {
                        title: 'Establish WIP limits',
                        responsible: 'Agile Coach',
                        deliverable: 'WIP Policies',
                        priority: 'medium',
                        description: 'Set work-in-progress limits for flow optimization'
                    }
                ]
            },
            {
                name: '1.6 Roadmap & Release Planning',
                tasks: [
                    {
                        title: 'Align features across timeline',
                        responsible: 'Product Manager',
                        deliverable: 'Timeline View',
                        priority: 'high',
                        description: 'Create visual roadmap of features over time'
                    },
                    {
                        title: 'Calculate WSJF prioritization',
                        responsible: 'Product Owner',
                        deliverable: 'WSJF Scores',
                        priority: 'high',
                        description: 'Prioritize using Weighted Shortest Job First'
                    },
                    {
                        title: 'Assess business value',
                        responsible: 'Product Owner',
                        deliverable: 'Value Assessment',
                        priority: 'high',
                        description: 'Evaluate and rank feature business value'
                    },
                    {
                        title: 'Identify risks and dependencies',
                        responsible: 'Tech Lead',
                        deliverable: 'Risk/Dependency Log',
                        priority: 'high',
                        description: 'Document potential risks and inter-dependencies'
                    },
                    {
                        title: 'Create PI/Quarterly roadmap',
                        responsible: 'Product Manager',
                        deliverable: 'PI Roadmap',
                        priority: 'high',
                        description: 'Develop program increment planning timeline'
                    },
                    {
                        title: 'Define 2-3 year solution roadmap',
                        responsible: 'Product Strategy',
                        deliverable: 'Long-term Roadmap',
                        priority: 'medium',
                        description: 'Create strategic long-term product roadmap'
                    }
                ]
            },
            {
                name: '1.7 Product Goals – MVP vs MMP',
                tasks: [
                    {
                        title: 'Define MVP for learning/validation',
                        responsible: 'Product Owner',
                        deliverable: 'MVP Scope',
                        priority: 'high',
                        description: 'Establish minimum viable product for testing'
                    },
                    {
                        title: 'Define MMP for market-ready value',
                        responsible: 'Product Owner',
                        deliverable: 'MMP Scope',
                        priority: 'high',
                        description: 'Define minimum marketable product scope'
                    },
                    {
                        title: 'Align product goals with roadmap',
                        responsible: 'Product Manager',
                        deliverable: 'Goal Alignment Doc',
                        priority: 'high',
                        description: 'Ensure goals support overall product strategy'
                    }
                ]
            }
        ]
    },
    'build-test': {
        id: 'build-test',
        title: '2. Build & Test – Built-in Quality',
        description: 'Development excellence with continuous integration and security embedded',
        categories: [
            {
                name: 'Features & Stories Definition',
                tasks: [
                    {
                        title: 'Write feature summary',
                        responsible: 'Product Owner',
                        deliverable: 'Feature Document',
                        priority: 'high',
                        description: 'Create concise feature overview'
                    },
                    {
                        title: 'Document feature description',
                        responsible: 'Product Owner',
                        deliverable: 'Feature Details',
                        priority: 'high',
                        description: 'Provide comprehensive feature documentation'
                    },
                    {
                        title: 'Define benefit hypothesis',
                        responsible: 'Product Owner',
                        deliverable: 'Hypothesis Statement',
                        priority: 'high',
                        description: 'State expected benefits and outcomes'
                    },
                    {
                        title: 'Establish feature acceptance criteria',
                        responsible: 'Product Owner',
                        deliverable: 'Acceptance Criteria',
                        priority: 'high',
                        description: 'Define clear feature completion criteria'
                    },
                    {
                        title: 'Write user story summary',
                        responsible: 'Product Owner',
                        deliverable: 'User Stories',
                        priority: 'high',
                        description: 'Create user-centric story descriptions'
                    },
                    {
                        title: 'Define story acceptance criteria',
                        responsible: 'Product Owner',
                        deliverable: 'Story Criteria',
                        priority: 'high',
                        description: 'Establish story-level completion criteria'
                    }
                ]
            },
            {
                name: '2.1 Development Excellence - Ways of Working',
                tasks: [
                    {
                        title: 'Conduct backlog refinement',
                        responsible: 'Scrum Master',
                        deliverable: 'Refined Backlog',
                        priority: 'high',
                        description: 'Continuously refine and prioritize backlog items'
                    },
                    {
                        title: 'Apply UI/UX best practices',
                        responsible: 'UX Designer',
                        deliverable: 'UI/UX Guidelines',
                        priority: 'medium',
                        description: 'Ensure consistent user experience design'
                    },
                    {
                        title: 'Perform sprint/iteration planning',
                        responsible: 'Scrum Team',
                        deliverable: 'Sprint Plan',
                        priority: 'high',
                        description: 'Plan and commit to iteration goals'
                    },
                    {
                        title: 'Write unit test cases (TDD)',
                        responsible: 'Developer',
                        deliverable: 'Unit Tests',
                        priority: 'high',
                        description: 'Practice test-driven development'
                    },
                    {
                        title: 'Create technical blueprint',
                        responsible: 'Tech Lead',
                        deliverable: 'Technical Design',
                        priority: 'high',
                        description: 'Design detailed technical implementation'
                    },
                    {
                        title: 'Implement code',
                        responsible: 'Developer',
                        deliverable: 'Source Code',
                        priority: 'high',
                        description: 'Develop feature implementation'
                    },
                    {
                        title: 'Create pull request',
                        responsible: 'Developer',
                        deliverable: 'PR',
                        priority: 'high',
                        description: 'Submit code for review via pull request'
                    },
                    {
                        title: 'Conduct code review',
                        responsible: 'Tech Lead',
                        deliverable: 'Review Comments',
                        priority: 'high',
                        description: 'Review code quality, standards, and best practices'
                    },
                    {
                        title: 'Commit to version control',
                        responsible: 'Developer',
                        deliverable: 'Git Commits',
                        priority: 'high',
                        description: 'Maintain version history in Git'
                    },
                    {
                        title: 'Execute testing',
                        responsible: 'QA Engineer',
                        deliverable: 'Test Results',
                        priority: 'high',
                        description: 'Perform comprehensive testing'
                    },
                    {
                        title: 'Deploy to Dev environment',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Dev Deployment',
                        priority: 'high',
                        description: 'Deploy to development environment'
                    }
                ]
            },
            {
                name: '2.2 CI Pipeline Mechanics',
                tasks: [
                    {
                        title: 'Configure version control (GitHub/GitLab)',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Repo Setup',
                        priority: 'high',
                        description: 'Set up Git repository and branching strategy'
                    },
                    {
                        title: 'Setup automated build triggers',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Build Configuration',
                        priority: 'high',
                        description: 'Configure automatic build on code commit'
                    },
                    {
                        title: 'Configure build tools (Maven/Gradle)',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Build Scripts',
                        priority: 'high',
                        description: 'Set up build automation tools'
                    },
                    {
                        title: 'Setup CI tools (Jenkins/GitHub Actions)',
                        responsible: 'DevOps Engineer',
                        deliverable: 'CI Pipeline',
                        priority: 'high',
                        description: 'Configure continuous integration platform'
                    },
                    {
                        title: 'Implement unit test execution',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Test Automation',
                        priority: 'high',
                        description: 'Automate unit test execution in CI'
                    },
                    {
                        title: 'Configure static code analysis',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Code Quality Gates',
                        priority: 'high',
                        description: 'Set up automated code quality checks'
                    },
                    {
                        title: 'Setup artifact creation/storage',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Artifact Repository',
                        priority: 'high',
                        description: 'Configure artifact management system'
                    }
                ]
            },
            {
                name: '2.3 Security as Non-Functional Requirement',
                tasks: [
                    {
                        title: 'Implement SAST (Static Application Security Testing)',
                        responsible: 'Security Engineer',
                        deliverable: 'SAST Configuration',
                        priority: 'high',
                        description: 'Set up static security testing in pipeline'
                    },
                    {
                        title: 'Configure dependency scanning',
                        responsible: 'Security Engineer',
                        deliverable: 'Dependency Checks',
                        priority: 'high',
                        description: 'Scan dependencies for vulnerabilities'
                    },
                    {
                        title: 'Setup secrets management',
                        responsible: 'Security Engineer',
                        deliverable: 'Vault Configuration',
                        priority: 'high',
                        description: 'Implement secure secrets storage and management'
                    },
                    {
                        title: 'Verify no critical vulnerabilities (CVSS > 7)',
                        responsible: 'Security Engineer',
                        deliverable: 'Security Report',
                        priority: 'high',
                        description: 'Ensure no high-severity security issues'
                    },
                    {
                        title: 'Ensure no hardcoded secrets',
                        responsible: 'Security Engineer',
                        deliverable: 'Secret Scan Report',
                        priority: 'high',
                        description: 'Validate no credentials in source code'
                    },
                    {
                        title: 'Validate compliance checks',
                        responsible: 'Security Engineer',
                        deliverable: 'Compliance Report',
                        priority: 'high',
                        description: 'Verify adherence to security standards'
                    }
                ]
            }
        ]
    },
    cd: {
        id: 'cd',
        title: '3. Continuous Deployment – Validating & Staging',
        description: 'Automated deployment with advanced validation and observability',
        categories: [
            {
                name: '3.1 Deployment Flow',
                tasks: [
                    {
                        title: 'Setup Infrastructure as Code (IaC)',
                        responsible: 'DevOps Engineer',
                        deliverable: 'IaC Scripts',
                        priority: 'high',
                        description: 'Implement infrastructure automation'
                    },
                    {
                        title: 'Configure Dev environment',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Dev Environment',
                        priority: 'high',
                        description: 'Set up development environment'
                    },
                    {
                        title: 'Configure QA environment',
                        responsible: 'DevOps Engineer',
                        deliverable: 'QA Environment',
                        priority: 'high',
                        description: 'Set up testing environment'
                    },
                    {
                        title: 'Configure Staging environment',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Staging Environment',
                        priority: 'high',
                        description: 'Set up pre-production environment'
                    },
                    {
                        title: 'Configure Production environment',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Prod Environment',
                        priority: 'high',
                        description: 'Set up production environment'
                    },
                    {
                        title: 'Implement automated promotion pipeline',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Promotion Pipeline',
                        priority: 'high',
                        description: 'Automate environment promotion process'
                    }
                ]
            },
            {
                name: '3.2 Advanced Validation (Non-Functional Testing)',
                tasks: [
                    {
                        title: 'Execute performance testing',
                        responsible: 'Performance Engineer',
                        deliverable: 'Performance Report',
                        priority: 'high',
                        description: 'Test system performance under normal load'
                    },
                    {
                        title: 'Execute load testing',
                        responsible: 'Performance Engineer',
                        deliverable: 'Load Test Report',
                        priority: 'high',
                        description: 'Test system under expected peak load'
                    },
                    {
                        title: 'Execute stress testing',
                        responsible: 'Performance Engineer',
                        deliverable: 'Stress Test Report',
                        priority: 'medium',
                        description: 'Test system beyond normal capacity'
                    },
                    {
                        title: 'Execute DAST (Dynamic Application Security Testing)',
                        responsible: 'Security Engineer',
                        deliverable: 'DAST Report',
                        priority: 'high',
                        description: 'Test running application for vulnerabilities'
                    },
                    {
                        title: 'Validate scalability',
                        responsible: 'Performance Engineer',
                        deliverable: 'Scalability Report',
                        priority: 'medium',
                        description: 'Verify system can scale appropriately'
                    },
                    {
                        title: 'Test disaster recovery',
                        responsible: 'DevOps Engineer',
                        deliverable: 'DR Test Results',
                        priority: 'medium',
                        description: 'Validate backup and recovery procedures'
                    }
                ]
            },
            {
                name: '3.3 Verification Before Release',
                tasks: [
                    {
                        title: 'Setup monitoring (Prometheus)',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Monitoring Config',
                        priority: 'high',
                        description: 'Configure system and application monitoring'
                    },
                    {
                        title: 'Configure logging (ELK Stack)',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Logging Config',
                        priority: 'high',
                        description: 'Set up centralized logging system'
                    },
                    {
                        title: 'Implement tracing (Jaeger)',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Tracing Config',
                        priority: 'medium',
                        description: 'Configure distributed tracing'
                    },
                    {
                        title: 'Validate deployment health via logs',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Log Analysis',
                        priority: 'high',
                        description: 'Review logs for errors and warnings'
                    },
                    {
                        title: 'Review metrics and alerts',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Metrics Dashboard',
                        priority: 'high',
                        description: 'Verify all metrics and alerts functioning'
                    },
                    {
                        title: 'Verify system readiness',
                        responsible: 'Release Manager',
                        deliverable: 'Readiness Report',
                        priority: 'high',
                        description: 'Complete final release readiness check'
                    }
                ]
            }
        ]
    },
    rod: {
        id: 'rod',
        title: '4. Release on Demand – Delivering Value',
        description: 'Strategic release with feedback loops and continuous value delivery',
        categories: [
            {
                name: '4.1 Strategic Release',
                tasks: [
                    {
                        title: 'Decouple deployment from release',
                        responsible: 'Release Manager',
                        deliverable: 'Release Strategy',
                        priority: 'high',
                        description: 'Separate technical deployment from business release'
                    },
                    {
                        title: 'Implement feature toggles',
                        responsible: 'Tech Lead',
                        deliverable: 'Feature Flags',
                        priority: 'high',
                        description: 'Enable/disable features without deployment'
                    },
                    {
                        title: 'Setup A/B testing framework',
                        responsible: 'Product Manager',
                        deliverable: 'A/B Test Config',
                        priority: 'medium',
                        description: 'Configure experimentation platform'
                    },
                    {
                        title: 'Plan phased rollout strategy',
                        responsible: 'Release Manager',
                        deliverable: 'Rollout Plan',
                        priority: 'high',
                        description: 'Design gradual feature release approach'
                    },
                    {
                        title: 'Configure canary deployments',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Canary Config',
                        priority: 'medium',
                        description: 'Set up canary release mechanism'
                    },
                    {
                        title: 'Establish rollback procedures',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Rollback Plan',
                        priority: 'high',
                        description: 'Define quick rollback process'
                    }
                ]
            },
            {
                name: '4.2 Stability & Enduring Value',
                tasks: [
                    {
                        title: 'Define SLAs/SLOs',
                        responsible: 'Service Manager',
                        deliverable: 'SLA Document',
                        priority: 'high',
                        description: 'Establish service level agreements and objectives'
                    },
                    {
                        title: 'Monitor SLA compliance',
                        responsible: 'DevOps Engineer',
                        deliverable: 'SLA Dashboards',
                        priority: 'high',
                        description: 'Track and report on SLA metrics'
                    },
                    {
                        title: 'Implement incident management',
                        responsible: 'Service Manager',
                        deliverable: 'Incident Process',
                        priority: 'high',
                        description: 'Establish incident response procedures'
                    },
                    {
                        title: 'Execute continuous patching',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Patch Schedule',
                        priority: 'high',
                        description: 'Maintain regular security and bug patches'
                    },
                    {
                        title: 'Conduct post-release reviews',
                        responsible: 'Release Manager',
                        deliverable: 'Review Report',
                        priority: 'medium',
                        description: 'Analyze release success and lessons learned'
                    },
                    {
                        title: 'Maintain system stability',
                        responsible: 'DevOps Team',
                        deliverable: 'Stability Metrics',
                        priority: 'high',
                        description: 'Ensure ongoing system reliability'
                    }
                ]
            },
            {
                name: '4.3 Closing the Loop – Feedback to CE',
                tasks: [
                    {
                        title: 'Collect user engagement metrics',
                        responsible: 'Product Manager',
                        deliverable: 'Engagement Data',
                        priority: 'high',
                        description: 'Gather user interaction data'
                    },
                    {
                        title: 'Track conversion rates',
                        responsible: 'Product Manager',
                        deliverable: 'Conversion Metrics',
                        priority: 'high',
                        description: 'Monitor business conversion metrics'
                    },
                    {
                        title: 'Monitor performance metrics',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Performance Data',
                        priority: 'high',
                        description: 'Track system performance indicators'
                    },
                    {
                        title: 'Analyze real usage data',
                        responsible: 'Data Analyst',
                        deliverable: 'Usage Analysis',
                        priority: 'high',
                        description: 'Analyze how users interact with features'
                    },
                    {
                        title: 'Generate insights and improvements',
                        responsible: 'Product Owner',
                        deliverable: 'Insights Report',
                        priority: 'high',
                        description: 'Derive actionable insights from data'
                    },
                    {
                        title: 'Hypothesize new ideas',
                        responsible: 'Product Team',
                        deliverable: 'New Hypotheses',
                        priority: 'medium',
                        description: 'Formulate new hypotheses based on learnings'
                    },
                    {
                        title: 'Feed data back to Discovery phase',
                        responsible: 'Product Manager',
                        deliverable: 'Feedback Loop Doc',
                        priority: 'high',
                        description: 'Complete the cycle by informing next iteration'
                    }
                ]
            }
        ]
    },
    principles: {
        id: 'principles',
        title: '5. Cross-Cutting Principles',
        description: 'Foundational principles that apply across all phases',
        categories: [
            {
                name: '5.1 Automation First Mindset',
                tasks: [
                    {
                        title: 'Eliminate manual approvals',
                        responsible: 'DevOps Lead',
                        deliverable: 'Automation Plan',
                        priority: 'high',
                        description: 'Automate approval processes where possible'
                    },
                    {
                        title: 'Fully automate CI/CD pipelines',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Pipeline Automation',
                        priority: 'high',
                        description: 'End-to-end pipeline automation'
                    },
                    {
                        title: 'Implement self-service environments',
                        responsible: 'DevOps Engineer',
                        deliverable: 'Self-Service Portal',
                        priority: 'medium',
                        description: 'Enable developers to provision resources'
                    },
                    {
                        title: 'Automate testing',
                        responsible: 'QA Lead',
                        deliverable: 'Test Automation Suite',
                        priority: 'high',
                        description: 'Comprehensive automated testing'
                    }
                ]
            },
            {
                name: '5.2 DevSecOps Culture',
                tasks: [
                    {
                        title: 'Establish shared ownership (Dev+Ops+Sec)',
                        responsible: 'Leadership',
                        deliverable: 'Team Charter',
                        priority: 'high',
                        description: 'Create collaborative team culture'
                    },
                    {
                        title: 'Implement security as code',
                        responsible: 'Security Engineer',
                        deliverable: 'Security Policies',
                        priority: 'high',
                        description: 'Codify security policies and controls'
                    },
                    {
                        title: 'Automate compliance',
                        responsible: 'Security Engineer',
                        deliverable: 'Compliance Automation',
                        priority: 'high',
                        description: 'Automated compliance checking'
                    },
                    {
                        title: 'Conduct security training',
                        responsible: 'Security Lead',
                        deliverable: 'Training Program',
                        priority: 'medium',
                        description: 'Regular security awareness training'
                    }
                ]
            },
            {
                name: '5.3 Flow Efficiency',
                tasks: [
                    {
                        title: 'Reduce batch sizes',
                        responsible: 'Agile Coach',
                        deliverable: 'Process Optimization',
                        priority: 'high',
                        description: 'Work in small, frequent increments'
                    },
                    {
                        title: 'Minimize waiting states',
                        responsible: 'Agile Coach',
                        deliverable: 'Flow Metrics',
                        priority: 'high',
                        description: 'Eliminate bottlenecks and delays'
                    },
                    {
                        title: 'Optimize lead time',
                        responsible: 'Agile Coach',
                        deliverable: 'Lead Time Analysis',
                        priority: 'high',
                        description: 'Reduce time from idea to production'
                    },
                    {
                        title: 'Measure and improve cycle time',
                        responsible: 'Agile Coach',
                        deliverable: 'Cycle Time Report',
                        priority: 'medium',
                        description: 'Track and optimize development cycle time'
                    }
                ]
            },
            {
                name: '5.4 Built-in Quality',
                tasks: [
                    {
                        title: 'Implement quality gates at every stage',
                        responsible: 'QA Lead',
                        deliverable: 'Quality Gates',
                        priority: 'high',
                        description: 'Enforce quality checkpoints throughout SDLC'
                    },
                    {
                        title: 'Ensure zero defect carry-forward',
                        responsible: 'QA Lead',
                        deliverable: 'Quality Policy',
                        priority: 'high',
                        description: 'Fix defects before moving forward'
                    },
                    {
                        title: 'Automate quality checks',
                        responsible: 'QA Engineer',
                        deliverable: 'Quality Automation',
                        priority: 'high',
                        description: 'Automated code quality validation'
                    },
                    {
                        title: 'Continuous quality monitoring',
                        responsible: 'QA Lead',
                        deliverable: 'Quality Dashboard',
                        priority: 'high',
                        description: 'Real-time quality metrics visibility'
                    }
                ]
            }
        ]
    }
};

// Role mappings
export const roleMapping: { [key: string]: string } = {
    'product-owner': 'Product Owner',
    'scrum-master': 'Scrum Master',
    'tech-lead': 'Tech Lead',
    'developer': 'Developer',
    'qa-engineer': 'QA Engineer',
    'devops-engineer': 'DevOps Engineer',
    'security-engineer': 'Security Engineer',
    'ux-designer': 'UX Designer',
    'business-analyst': 'Business Analyst',
    'project-manager': 'Project Manager',
    'all': 'All Roles'
};

export { playbookData };

import * as React from 'react';
import styles from './SdlcPlaybook.module.scss';
import { ISdlcPlaybookProps } from './ISdlcPlaybookProps';
import { playbookData, roleMapping } from '../../../data/playbook-data';

export interface ISdlcPlaybookState {
  currentRole: string;
  currentPhase: string;
  activeSection: 'home' | 'playbook' | 'about';
  loading: boolean;
}

export default class SdlcPlaybook extends React.Component<ISdlcPlaybookProps, ISdlcPlaybookState> {
  constructor(props: ISdlcPlaybookProps) {
    super(props);
    this.state = {
      currentRole: '',
      currentPhase: '',
      activeSection: 'home',
      loading: true
    };
  }

  public componentDidMount(): void {
    // Simulate loading animation
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2500);
  }

  private handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ currentRole: event.target.value });
  }

  private handlePhaseChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ currentPhase: event.target.value });
  }

  private launchPlaybook = (): void => {
    if (!this.state.currentRole || !this.state.currentPhase) {
      alert('Please select both a role and a phase to continue.');
      return;
    }
    this.setState({ activeSection: 'playbook' });
  }

  private showHome = (): void => {
    this.setState({ activeSection: 'home' });
  }

  private showAbout = (): void => {
    this.setState({ activeSection: 'about' });
  }

  private renderLoadingScreen(): JSX.Element {
    return (
      <div className={styles['loading-screen']}>
        <div className={styles['loading-content']}>
          <div className={styles['mb-logo']}>
            <div className={styles['logo-star']}></div>
            <div className={styles['logo-circle']}></div>
          </div>
          <div className={styles['loading-text']}>INITIALIZING SDLC PLAYBOOK</div>
          <div className={styles['loading-bar']}>
            <div className={styles['loading-progress']}></div>
          </div>
        </div>
      </div>
    );
  }

  private renderTaskCard(task: any): JSX.Element {
    return (
      <div className={styles['task-card']} key={task.title}>
        <div className={styles['task-header']}>
          <div className={styles['task-title']}>{task.title}</div>
          <span className={`${styles['task-priority']} ${styles[task.priority]}`}>{task.priority}</span>
        </div>
        <div className={styles['task-meta']}>
          <div className={styles['task-meta-item']}>
            <span className={styles['task-label']}>Responsible:</span>
            <span>{task.responsible}</span>
          </div>
          <div className={styles['task-meta-item']}>
            <span className={styles['task-label']}>Deliverable:</span>
            <span>{task.deliverable}</span>
          </div>
        </div>
        <div className={styles['task-description']}>
          <p>{task.description}</p>
        </div>
      </div>
    );
  }

  private renderPhaseContent(): JSX.Element {
    const { currentPhase, currentRole } = this.state;
    const phaseData = playbookData[currentPhase];

    if (!phaseData) {
      return <div>Phase data not found.</div>;
    }

    const roleName = roleMapping[currentRole] || currentRole;

    return (
      <div className={styles['phase-content']}>
        <div className={styles['phase-header-section']}>
          <h2 className={styles['phase-title']}>{phaseData.title}</h2>
          <p className={styles['phase-description']}>{phaseData.description}</p>
        </div>
        {phaseData.categories.map((category: any, idx: number) => {
          let tasks = category.tasks;
          if (currentRole !== 'all') {
            tasks = tasks.filter((task: any) => task.responsible === roleName);
          }

          if (tasks.length === 0) return null;

          return (
            <div className={styles['category-section']} key={idx}>
              <div className={styles['category-header']}>
                <h3 className={styles['category-title']}>{category.name}</h3>
                <span className={styles['task-count']}>
                  {tasks.length} Task{tasks.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className={styles['tasks-grid']}>
                {tasks.map((task: any) => this.renderTaskCard(task))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  public render(): React.ReactElement<ISdlcPlaybookProps> {
    const { loading, activeSection, currentRole, currentPhase } = this.state;

    if (loading) {
      return this.renderLoadingScreen();
    }

    return (
      <div className={styles['sdlc-playbook']}>
        <header className={styles['main-header']}>
          <div className={styles['header-content']}>
            <div className={styles['logo-section']}>
              <div className={styles['mb-logo-small']}>
                <div className={styles['logo-star-small']}></div>
              </div>
              <h1 className={styles['header-title']}>SDLC PLAYBOOK</h1>
              <span className={styles['header-subtitle']}>Mercedes-Benz R&D India</span>
            </div>
            <nav className={styles['header-nav']}>
              <button className={styles['nav-btn']} onClick={this.showHome}>Home</button>
              <button className={styles['nav-btn']} onClick={this.showAbout}>About</button>
            </nav>
          </div>
        </header>

        {activeSection === 'home' && (
          <section className={styles.section}>
            <div className={styles['hero-section']}>
              <div className={styles['hero-content']}>
                <h2 className={styles['hero-title']}>THE FUTURE OF SOFTWARE DEVELOPMENT</h2>
                <p className={styles['hero-tagline']}>Lean-Agile | DevSecOps | Continuous Everything</p>
                <div className={styles['hero-divider']}></div>
                <p className={styles['hero-description']}>
                  Navigate through our comprehensive SDLC framework - from Discovery to Release on Demand. 
                  Built on Lean Startup principles with security and automation embedded throughout.
                </p>
              </div>

              <div className={styles['selection-panel']}>
                <div className={styles['panel-header']}>
                  <h3>SELECT YOUR PATH</h3>
                </div>
                <div className={styles['selection-container']}>
                  <div className={styles['selection-group']}>
                    <label className={styles['selection-label']}>SELECT YOUR ROLE</label>
                    <select 
                      className={styles['custom-select']} 
                      onChange={this.handleRoleChange}
                      value={currentRole}
                    >
                      <option value="">Choose Role...</option>
                      <option value="product-owner">Product Owner</option>
                      <option value="scrum-master">Scrum Master / Agile Coach</option>
                      <option value="tech-lead">Tech Lead / Architect</option>
                      <option value="developer">Developer</option>
                      <option value="qa-engineer">QA Engineer</option>
                      <option value="devops-engineer">DevOps Engineer</option>
                      <option value="security-engineer">Security Engineer</option>
                      <option value="ux-designer">UX Designer</option>
                      <option value="business-analyst">Business Analyst</option>
                      <option value="project-manager">Project Manager</option>
                      <option value="all">View All Tasks</option>
                    </select>
                  </div>

                  <div className={styles['selection-group']}>
                    <label className={styles['selection-label']}>SELECT SDLC PHASE</label>
                    <select 
                      className={styles['custom-select']} 
                      onChange={this.handlePhaseChange}
                      value={currentPhase}
                    >
                      <option value="">Choose Phase...</option>
                      <option value="discovery">1. Discovery - Understanding & Aligning</option>
                      <option value="build-test">2. Build & Test - Built-in Quality</option>
                      <option value="cd">3. Continuous Deployment</option>
                      <option value="rod">4. Release on Demand</option>
                      <option value="principles">5. Cross-Cutting Principles</option>
                    </select>
                  </div>

                  <button 
                    className={styles['launch-button']} 
                    onClick={this.launchPlaybook}
                    disabled={!currentRole || !currentPhase}
                  >
                    <span className={styles['btn-text']}>LAUNCH PLAYBOOK</span>
                    <span className={styles['btn-icon']}>→</span>
                  </button>
                </div>

                <div className={styles['quick-stats']}>
                  <div className={styles['stat-item']}>
                    <div className={styles['stat-number']}>5</div>
                    <div className={styles['stat-label']}>Phases</div>
                  </div>
                  <div className={styles['stat-item']}>
                    <div className={styles['stat-number']}>100+</div>
                    <div className={styles['stat-label']}>Tasks</div>
                  </div>
                  <div className={styles['stat-item']}>
                    <div className={styles['stat-number']}>10+</div>
                    <div className={styles['stat-label']}>Roles</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'playbook' && (
          <section className={styles.section}>
            <div className={styles['playbook-header']}>
              <button className={styles['back-btn']} onClick={this.showHome}>← Back to Home</button>
              <div className={styles['current-selection']}>
                <span className={styles['selection-badge']}>Role: {roleMapping[currentRole]}</span>
                <span className={styles['selection-badge']}>Phase: {playbookData[currentPhase]?.title}</span>
              </div>
            </div>
            {this.renderPhaseContent()}
          </section>
        )}

        {activeSection === 'about' && (
          <section className={styles.section}>
            <div className={styles['about-content']}>
              <h2>About This Playbook</h2>
              <div className={styles['about-grid']}>
                <div className={styles['about-card']}>
                  <h3>Purpose</h3>
                  <p>
                    This interactive playbook provides a comprehensive guide to our Lean-Agile SDLC framework, 
                    ensuring fast feedback loops, high quality, and business agility.
                  </p>
                </div>
                <div className={styles['about-card']}>
                  <h3>Methodology</h3>
                  <p>
                    Built on Lean Startup (Build-Measure-Learn), SAFe principles, and DevSecOps practices 
                    with continuous integration and deployment.
                  </p>
                </div>
                <div className={styles['about-card']}>
                  <h3>Security First</h3>
                  <p>
                    Security is embedded throughout the lifecycle, not added later. 
                    We practice DevSecOps with shared ownership.
                  </p>
                </div>
                <div className={styles['about-card']}>
                  <h3>Automation</h3>
                  <p>
                    Automation-first mindset with fully automated CI/CD pipelines, 
                    self-service environments, and quality gates at every stage.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        <footer className={styles['main-footer']}>
          <div className={styles['footer-content']}>
            <p>© 2026 Mercedes-Benz Research and Development India. All rights reserved.</p>
            <p className={styles['footer-tagline']}>Shaping the Future of Automotive Software</p>
          </div>
        </footer>
      </div>
    );
  }
}

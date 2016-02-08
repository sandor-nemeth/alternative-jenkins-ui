import React from 'react';

const sample_data = [
    { "name": "config-provider-model" },
    { "name": "Containers" },
    { "name": "danielbeck" },
    { "name": "fix-git-configuration-on-remote-slave-8" },
    { "name": "infra_backend-confluence-spam-remover" },
    { "name": "infra_backend-merge-all-repo" },
    { "name": "infra_backend_crawler" },
    { "name": "infra_backend_jenkins_ci_cloudbess_com_filler" },
    { "name": "infra_backend_pull_request_greeter" },
    { "name": "infra_census_push" },
    { "name": "infra_changelog_refresh" },
    { "name": "infra_checkout_stats" },
    { "name": "infra_commit_history_generation" },
    { "name": "infra_extension-indexer" },
    { "name": "infra_generate_monthly_json" },
    { "name": "infra_github_repository_list" },
    { "name": "infra_javadoc" },
    { "name": "infra_jenkins-ci.org_webcontents" },
    { "name": "infra_jenkins-infra" },
    { "name": "infra_mirroring" },
    { "name": "infra_mock-webapp" },
    { "name": "infra_patron_messages" },
    { "name": "infra_plugin-compat-tester" },
    { "name": "infra_plugin_changes_report" },
    { "name": "infra_pluginmirror" },
    { "name": "infra_pull_m2repo" },
    { "name": "infra_release.rss" },
    { "name": "infra_repo.jenkins-ci.org_maven_index" },
    { "name": "infra_statistics" },
    { "name": "infra_sync_maven-hpi-plugin_www" },
    { "name": "jenkins.io" },
    { "name": "jenkins_2.0" },
    { "name": "jenkins_2.0_pipeline" },
    { "name": "jenkins_lts_branch" },
    { "name": "jenkins_main_maven-3.1.0" },
    { "name": "jenkins_main_trunk" },
    { "name": "jenkins_pom" },
    { "name": "jenkins_rc_branch" },
    { "name": "kohsuke_github-api" },
    { "name": "lib-jenkins-maven-artifact-manager" },
    { "name": "lib-jenkins-maven-embedder" },
    { "name": "lib-jira-api" },
    { "name": "libs_core-js" },
    { "name": "libs_dom4j" },
    { "name": "libs_htmlunit" },
    { "name": "libs_jelly" },
    { "name": "libs_jexl" },
    { "name": "libs_jmdns" },
    { "name": "libs_json-lib" },
    { "name": "libs_maven-jetty-plugin" },
    { "name": "libs_netx" },
    { "name": "libs_svnkit" },
    { "name": "libs_trilead-ssh2" },
    { "name": "libs_winstone" },
    { "name": "libs_xstream" },
    { "name": "maven-interceptors" },
    { "name": "model-ant-project" },
    { "name": "model-ruby-project" },
    { "name": "plugin-compat-tester" },
    { "name": "remoting" },
    { "name": "Reporting" },
    { "name": "test-matrix" },
    { "name": "tmp-jenkins-20-jenkinsfile" },
    { "name": "tools_maven-hpi-plugin" },
    { "name": "tools_maven-hpi-plugin-maven-2.x" },
    { "name": "Update Center" }
  ]

class JenkinsNavbarSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: null,
      results: []
    };

    this.data = sample_data;
  }

  handleOnChange(event) {
    let queryResult = sample_data.filter((r) => r.name.startsWith(event.target.value));
    this.setState({
      query: event.target.value,
      results: queryResult
    })
  }

  componentDidMount() {
    $('#navbar-search-input').popup({
      on: 'focus',
      position: 'bottom left'
    });
  }

  render() {
    let value = this.state.query;
    return (
      <div className="ui transparent inverted icon input">
          <i className="search icon"></i>
          <input id="navbar-search-input" type="text" placeholder="Search in Jenkins" value={value} onChange={this.handleOnChange} />
          <div id="navbar-search-result-popup" className="ui popup bottom left">
            <p>Search in jenkins just by typing into this box</p>
          </div>
      </div>
    )
  }
}

export default class extends React.Component {
  render() {
    return (
      <div className="ui fixed inverted menu">
            <a href="#" className="header item">Jenkins CI</a>
            <div className="ui simple dropdown item">
                Menu <i className="dropdown icon"></i>
                <div className="menu">
                    <a href="#" className="item">
                        <i className="users icon"></i>  Users
                    </a>
                    <a href="#" className="item">
                        <i className="code icon"></i> Build history
                    </a>
                    <a href="#" className="item">
                        <i className="sitemap icon"></i> Relations
                    </a>
                    <a href="#" className="item">
                        <i className="payment icon"></i> Fingerprints
                    </a>
                    <a href="#" className="item">
                        <i className="compress icon"></i> Job config history
                    </a>
                    <a href="#" className="item">
                        <i className="bar icon"></i> I need a beer
                    </a>
                </div>
            </div>
            <div className="right menu">
                <div className="item">
                  <JenkinsNavbarSearch />
                </div>
                <div className="ui simple dropdown item">
                    Sandor Nemeth <i className="dropdown icon"></i>
                    <div className="menu">
                        <a href="#" className="item">
                            <i className="lock icon"></i> Sign out
                        </a>
                    </div>
                </div>
            </div>
        </div>
      )
  }
}

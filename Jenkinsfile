pipeline {
    agent any

    environment {
        CI = 'true'
        PLAYWRIGHT_BROWSERS_PATH = '0'
        ALLURE_RESULTS_DIR = 'allure-results'
        ALLURE_REPORT_DIR = 'allure-report'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm ci'
                    } else {
                        bat 'npm ci'
                    }
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm run regressionTest'
                    } else {
                        bat 'npm run regressionTest'
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }
    }
}
pipeline{
    agent none 
    stages {
        stage('Building') {
            agent any
            steps {
                sh '''
                    ./local/scripts/build/build.sh
                    ./local/scripts/build/compact.sh
                '''
            }
        }
        stage('Sending') {
            agent any
            steps {
                sh '''
                    ./local/scripts/deploy/send.sh
                '''
            }
        }
        stage('Deploying') {
            agent {
                label 'agent-prd'
            }
            steps {
                sh '''
                    ./var/lib/jenkins/scripts/extract_assets.sh
                '''
            }
        }
    }
}
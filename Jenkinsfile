pipeline{
    agent none 
    stages {
        stage('Building and sending') {
            agent any
            steps {
                sh '''
                    ./local/scripts/build/build.sh
                    ./local/scripts/build/compact.sh
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
                    ./remote/scripts/deploy/extract_assets.sh
                '''
            }
        }
    }
}
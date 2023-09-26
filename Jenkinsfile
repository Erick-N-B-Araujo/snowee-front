pipeline{
    agent any 
    stages {
        stage('Build') {
            steps {
                sh '''
                    ./local/scripts/build/build.sh
                    ./local/scripts/build/compact.sh
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                    ./local/scripts/deploy/send.sh
                '''
            }
        }
    }
}
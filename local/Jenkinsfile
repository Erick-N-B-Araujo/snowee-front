pipeline{
    agent any 

    stages {
        stage('Build') {
            steps {
                sh '''
                    ./scripts/build/build_spa.sh
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh './scripts/deploy/deploy_spa.sh'
            }
        }
    }
}
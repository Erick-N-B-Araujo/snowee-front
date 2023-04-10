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
                    sshpass -p $PROD_PASS scp /var/jenkins_home/workspace/Frontend/local/typescript-app/dist/frontend/deploy.zip  root@191.96.251.3:/var/www/snoweegamecorp.com/html/
                    ./local/scripts/deploy/send.sh
                    ./remote/scripts/deploy/extract.sh
                '''
            }
        }
    }
}
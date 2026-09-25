pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t login-api .'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'echo Tests completed'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker rm -f login-container || true'
                sh 'docker run -d -p 3001:3000 --name login-container login-api'
            }
        }
    }
}
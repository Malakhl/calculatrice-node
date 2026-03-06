pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Build réussi'
            }
        }
    }

    post {
        success {
            echo 'Bravo, déploiement réussi !'
        }
    }
}
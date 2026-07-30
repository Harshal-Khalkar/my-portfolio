pipeline {

    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                url: 'git@github.com:Harshal-Khalkar/my-portfolio.git'
            }
        }


        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }


        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

    }

}
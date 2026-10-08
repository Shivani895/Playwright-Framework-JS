pipeline{
    agent any

    stages{
       
        stage('Install Dependencies')
        {
            steps{
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers')
        {
            steps{
                sh 'npx playwright install'
            }
        }

        stage('Run Tests')
        {
            steps{
                sh 'npx playwright test'
            }
        }

    }
}

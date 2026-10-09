pipeline{
    agent any

   parameters{
    choice(
        name: 'BROWSER',
        choices: ['chromium','firefox','webkit'],
        description: 'Select the browser to execute tests'
    )
   }
    stages{
        stage('Show Parameters')
        {
            steps{
                echo "Selected Browser: ${params.BROWSER}"
            }
        }
       
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
                sh "npx playwright test --project=${params.BROWSER}"
            }
        }

    }
}
//modified jenkins file
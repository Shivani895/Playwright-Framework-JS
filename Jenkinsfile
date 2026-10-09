pipeline{
    agent any
//modified jenkins file
   parameters{
    choice(
        name: 'BROWSER',
        choices: ['chromium','firefox','webkit'],
        description: 'Select the browser to execute tests'
    )
    choice( name: 'ENVIRONMENT',
     choices: ['PRACTICE', 'DEV', 'QA', 'UAT'], 
     description: 'Select the target environment' )
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
            environment { ENVIRONMENT = "${params.ENVIRONMENT}" }
            steps{
                sh "npx playwright test --project=${params.BROWSER}"
            }
        }

    }
}

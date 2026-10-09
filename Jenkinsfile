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
     
choice(
    name: 'SUITE',
    choices: ['ALL', 'SMOKE', 'REGRESSION'],
    description: 'Select which test suite to execute'
)


   }
    stages{
        stage('Show Parameters')
        {
            steps{
                echo "Selected Browser: ${params.BROWSER}"
                echo "Selected Enviornment: ${params.ENVIRONMENT}"
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

      
    stage('Run Tests') {
    environment {
        ENVIRONMENT = "${params.ENVIRONMENT}"
    }
    steps {
        script {
            if (params.SUITE == 'ALL') {
                sh "npx playwright test --project=${params.BROWSER}"
            } else if (params.SUITE == 'SMOKE') {
                sh "npx playwright test --project=${params.BROWSER} --grep='@smoke'"
            } else if (params.SUITE == 'REGRESSION') {
                sh "npx playwright test --project=${params.BROWSER} --grep='@regression'"
            }
        }
    }
}


    }
}

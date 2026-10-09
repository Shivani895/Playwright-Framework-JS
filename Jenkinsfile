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
         sh 'rm -rf allure-results test-results playwright-report'
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

stage('Demonstrate Failure Control') {
    steps {
        catchError(
            buildResult: 'FAILURE',
            stageResult: 'FAILURE'
        ) {
            echo 'Step 1: About to simulate a failure'
            error('Demonstration error: testing catchError')
        }
    }
}

stage('After Demonstration') {
    steps {
        echo 'Step 2: Pipeline continued after the caught error'
    }
}




    }
   
post {
    always {
        junit(
            testResults: 'test-results/results.xml',
            allowEmptyResults: true
        )

        archiveArtifacts(
            artifacts: 'playwright-report/**, allure-results/**, test-results/**',
            allowEmptyArchive: true
        )

        allure(
            includeProperties: false,
            results: [[path: 'allure-results']]
        )
    }
}


}

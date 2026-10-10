pipeline{
    agent any
    options {
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(
            numToKeepStr: '20',
            artifactNumToKeepStr: '10'
        ))
        disableConcurrentBuilds()
        timestamps()
    }

//modified jenkins file
   parameters{
    choice(
        name: 'BROWSER',
        choices: ['chromium','firefox','webkit'],
        description: 'Select the browser to execute tests'
    )
    choice( name: 'ENVIRONMENT',
     choices: ['PRACTICE', 'DEV', 'QA', 'UAT' , 'STAGING'], 
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
       
stage('Parallelism Demo') {
    parallel {
        stage('Branch A') {
            steps {
                echo 'Branch A started'
                sh 'sleep 10'
                echo 'Branch A finished'
            }
        }

        stage('Branch B') {
            steps {
                echo 'Branch B started'
                sh 'sleep 10'
                echo 'Branch B finished'
            }
        }
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

stage('QA Environment Check') {
    when {
        expression {
            params.ENVIRONMENT == 'QA'
        }
    }
    steps {
        echo 'QA environment selected. Running QA-specific checks.'
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

    success {
    echo 'Pipeline completed successfully.'
}

failure {
    echo 'Pipeline failed. Check Console Output and test reports.'
}
}



}

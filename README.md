# UCAS Evaluation Automate 国科大-自动课程评估

Simple scripts to automate the UCAS evaluate courses.

Evaluating courses is a tedious process that every student has to go through a lot to view their grades.
These scripts automate the evaluation process, while being customizable.

## To evaluate courses with console

Simply paste the evaluate-course.js code into your browser's console and press enter.

## To evalute courses with chrome-app

* `git clone git@github.com:Junyangz/ucas_evaluation_automate.git`
* Open Chrome and go to **Menu** > **Tools** > **Extensions**.
* Click **Developer mode** > **Load unpacked extensions**.
* Browse and Select the folder **chrome_app**.
* Browse the evaluation page and all operations will be completed with a simple confirmation click.

## Customization

* `var merit_rate = 5; // 0-5`
* `var merit = "课程特色鲜明，知识量适当，组织严密，概念清晰，逻辑性强。"; //at least 15 characters`
* `var flaw = "希望增加互动环节，降低课程作业难度。";`
* `var suggest = "课程内容选择是否合理，层次是否分明，知识点是否实用等。";`

## Disclaimer

* These scripts are in no way affilated with the UCAS itself, they're just a student activity to automate a time consuming process.
* You do not have to use these scripts to evaluate the courses you can just fill the form manually everytime.

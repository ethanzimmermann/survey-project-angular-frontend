//Survey Table Model
export interface Survey {
    //Survey's Id (primary key)
    id: Number;

    //List of answers to survey questions
    answers: string[];

    //User filling out the survey
    user: number;

    //Template/source of survey questions
    template: number;

    //Status of survey (notviewed, viewed, in-progress, or completed)
    status: string;
}

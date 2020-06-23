//Survey Template table model
export interface Surveytemplate {
    //Id for template (primary key)
    id: number;
    //Name of the template
    name: string;
    //List of questions
    questions: string[];
    //Admin who created the template
    admin: string;
}

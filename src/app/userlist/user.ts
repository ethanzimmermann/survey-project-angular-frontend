//SurveyUser table model
export interface User {
    //User id (Primary key)
    id: number;
    //User first name
    firstName: string;
    //User last name
    lastName: string;
    //User email address
    emailAddress: string;
    //User phone number
    phoneNumber: string;
    //Admin who created the user
    admin: string;
}

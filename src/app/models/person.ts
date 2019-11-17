import { Charge } from "./charge";
import { Social } from "./social";
import { Identity } from "./identity";
import { Medicalinfo } from "./medicalinfo";

// export class Person {
//     criminalCharges: Charge[];
//     socialNetworkInfo: Social[];
//     identity: Identity;
//     medicalInfo: Medicalinfo;
//     matchPercentage: number;
//     imageUrl: string;
// }

export class Person {
    identity: string;
    matchPercentage: number;
    imageUrl: string;
    fromDatabase: string;
    address: string;
    crimeNo: string;
    matchType: string;
    database_type: string;
}

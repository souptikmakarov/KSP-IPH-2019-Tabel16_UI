export class API_Response {
    Us: DB_Result;
    arrested: DB_Result;
    wanted: DB_Result;
}

export class DB_Result{
    alternateMatches: Search_Result[];
    bestMatch: Search_Result;
}

export class Search_Result{
    ed: string;
    name: string;
    pc: string;
}
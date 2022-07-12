export interface Game{
id?: number;
name?: string;
background_image?: string;
rating?: number;
released?: string;
metacritic?: number;
genres?: Array<any>;
description_raw?: string;
developers?: Array<any>;
tags?:Array<any>;
website?:string;
}
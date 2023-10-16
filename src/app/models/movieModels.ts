export interface ListaId {
    id: number,
    name: string
}

export interface MovieInfoModel {
    id: number,
    title: string,
    overview: string,
    release_date: string,
    vote_average: number,
    genre_ids: number[],
    poster_path: string
}

export interface MovieInfoDetailsModel {
    title: string,
    overview: string,
    release_date: string,
    vote_average: number,
    genres: number[],
    original_language: string,
    poster_path: string,
    budget: number,
    revenue: number,
    runtime: number,
    status: string,
}

export class MovieInfo {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    vote_average: string;
    genre_ids: string[];
    poster_path: string;

    constructor(id:number,
        title: string,
        overview: string,
        release_date: string,
        vote_average: string,
        genre_ids: string[],
        poster_path: string) {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.release_date = release_date;
        this.vote_average = vote_average;
        this.genre_ids = genre_ids;
        this.poster_path = poster_path
    }
}

export class MovieInfoDetail {
    title: string;
    overview: string;
    release_date: string;
    vote_average: string;
    genre_ids: string[];
    poster_path: string;
    budget: number;
    revenue: number;
    profit: number;
    runtime: number;
    status: string;

    constructor(title: string,
        overview: string,
        release_date: string,
        vote_average: string,
        genre_ids: string[],
        poster_path: string,
        budget: number,
        revenue: number,
        profit: number,
        runtime: number,
        status: string) {
        this.title = title;
        this.overview = overview;
        this.release_date = release_date;
        this.vote_average = vote_average;
        this.genre_ids = genre_ids;
        this.poster_path = poster_path;
        this.budget = budget;
        this.revenue = revenue;
        this.profit = profit;
        this.runtime = runtime;
        this.status = status;
    }
}
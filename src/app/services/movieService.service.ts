import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class MovieService {
    apiKey: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTY4NWMxZTdjZWZmODk2ZDc1MmRjMjNmZWU2NDJlNSIsInN1YiI6IjYyMDJhNjM0NDM5YmUxMDBhYWNjNDc0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dOETP9hagYTV7tF53eNNsf6n9-tC0mPylZMRCmV-vsw'
    url: string = 'https://api.themoviedb.org/3/'

    constructor(private http: HttpClient) { }

    getMovies() {
        const paramsData = { language: 'pt-BR'};
        const params = new HttpParams({ fromObject: paramsData });
        const headers = new HttpHeaders({ Authorization: `Bearer ${this.apiKey}` });

        return this.http.get<any>(
            `${this.url}discover/movie?language=pt-BR`, { headers, params }
        );
    }

    getMoviesDetails(movieId: number) {
        const paramsData = { language: 'pt-BR'};
        const params = new HttpParams({ fromObject: paramsData });
        const headers = new HttpHeaders({ Authorization: `Bearer ${this.apiKey}` });

        return this.http.get<any>(
            `${this.url}movie/${movieId}`, { headers, params }
        );
    }

    getGenreList() {
        const paramsData = { language: 'pt-BR'};
        const params = new HttpParams({ fromObject: paramsData });
        const headers = new HttpHeaders({ Authorization: `Bearer ${this.apiKey}` });

        return this.http.get<any>(
            `${this.url}genre/movie/list`, { headers, params }
        );
    }
}

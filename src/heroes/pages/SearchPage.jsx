import React from 'react'
import queryString from 'query-string';
import { HeroCard } from '../components'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        navigate(`?q=${searchText}`);
    };

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ onSearchSubmit }>
                        <input
                            type="text"
                            placeholder='Search a hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className='btn btn-outline-primary mt-3'>
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    
                    {
                        (q === '') 
                        ? <div className='alert alert-primary'>Search a hero</div>
                        : (heroes.length === 0) && <div className='alert alert-danger'>There's no results to show <b>{ q }</b></div>
                    }
                    
                    {
                        heroes.map( h => <HeroCard key={h.id} heroe={h} /> )
                    }
                </div>
            </div>
        </>
    )
}

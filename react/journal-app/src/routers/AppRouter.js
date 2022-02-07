import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);



    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
        
    }, [ setIsLoggedIn ])


    if ( checking ) {
        return (
            //<LoadingScreen />
            <h1>Wait...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Routes>
                    <Route 
                        exact path="/auth/*"
                        element={ 
                            <PublicRoute isAuthenticated={isLoggedIn}>
                                <AuthRouter /> 
                            </PublicRoute>
                        }
                    />

                    <Route 
                        exact path="/"
                        element={ 
                            <PrivateRoute isAuthenticated={isLoggedIn}>
                                <JournalScreen />
                            </PrivateRoute>
                        }
                    />

                    <Route 
                        path="/*"
                        element={ <Navigate to="/auth/login" /> }
                    />

                </Routes>
            </div>
        </Router>
    )
}

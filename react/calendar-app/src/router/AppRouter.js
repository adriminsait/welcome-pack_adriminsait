import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])

    if ( checking ) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Routes>
                    <Route 
                        exact path="/login" 
                        element={
                            <PublicRoute isAuthenticated={!!uid}>
                                <LoginScreen />
                            </PublicRoute>
                        } 
                    />
                    
                    <Route 
                        exact path="/" 
                        element={
                            <PrivateRoute isAuthenticated={!!uid}>
                                <CalendarScreen />
                            </PrivateRoute>
                        }
                    />

                    <Route path="/*" element={<Navigate to="/" />}/>
                </Routes>
            </div>
        </Router>
    )
};

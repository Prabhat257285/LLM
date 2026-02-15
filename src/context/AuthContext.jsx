import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock authentication logic
        let userData = null;

        if (email === 'admin@lms.com' && password === 'admin123') {
            userData = { name: 'Admin User', email, role: 'admin' };
        } else if (email === 'teacher@lms.com' && password === 'teacher123') {
            userData = { name: 'John Doe', email, role: 'teacher' };
        } else if (email === 'student@lms.com' && password === 'student123') {
            userData = { name: 'Jane Smith', email, role: 'student' };
        } else {
            throw new Error('Invalid email or password');
        }

        if (userData) {
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
            return userData; // Return user data for redirection
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const value = {
        user,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

export default function StudentProfile() {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        password: '',
        newPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to update profile (mock)
        alert('Profile updated successfully!');
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h1>
            <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center mb-6">
                        <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-bold">
                            {user?.name?.charAt(0)}
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-medium text-gray-900">{user?.name}</h3>
                            <p className="text-gray-500 capitalize">{user?.role}</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                        <h4 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h4>
                        <div className="grid grid-cols-1 gap-6">
                            <InputField
                                label="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Email Address"
                                name="email"
                                value={formData.email}
                                disabled // Email usually can't be changed easily in demo
                                className="bg-gray-50"
                            />
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                        <h4 className="text-lg font-medium text-gray-900 mb-4">Change Password</h4>
                        <div className="grid grid-cols-1 gap-6">
                            <InputField
                                label="Current Password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <InputField
                                label="New Password"
                                name="newPassword"
                                type="password"
                                value={formData.newPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit">Save Changes</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}

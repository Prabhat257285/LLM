import React from 'react';
import Card from '../../components/ui/Card';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';

export default function TeacherCreateCourse() {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Course</h1>
            <Card className="p-6">
                <form className="space-y-6">
                    <InputField label="Course Title" placeholder="e.g. Advanced React Patterns" required />
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" rows="4" required></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <InputField label="Category" placeholder="e.g. Web Development" required />
                        <InputField label="Price ($)" type="number" placeholder="99.99" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <InputField label="Duration" placeholder="e.g. 10 hours" required />
                        <InputField label="Thumbnail URL" placeholder="https://..." required />
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit">Publish Course</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}

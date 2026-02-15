import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Terminal, Database, Cloud, Shield, BarChart } from 'lucide-react';

const Categories = () => {
    const categories = [
        { name: 'Web Development', icon: Code, color: 'bg-blue-100 text-blue-600', link: '/category/web-dev' },
        { name: 'Data Science', icon: BarChart, color: 'bg-green-100 text-green-600', link: '/category/data-science' },
        { name: 'Cyber Security', icon: Shield, color: 'bg-red-100 text-red-600', link: '/category/security' },
        { name: 'Cloud Computing', icon: Cloud, color: 'bg-indigo-100 text-indigo-600', link: '/category/cloud' },
        { name: 'DevOps', icon: Terminal, color: 'bg-yellow-100 text-yellow-600', link: '/category/devops' },
        { name: 'Database Admin', icon: Database, color: 'bg-purple-100 text-purple-600', link: '/category/database' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Top Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            to={category.link}
                            className="flex flex-col items-center justify-center p-6 border rounded-xl hover:shadow-lg transition-shadow duration-300 group"
                        >
                            <div className={`p-4 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <category.icon className="h-8 w-8" />
                            </div>
                            <span className="font-medium text-gray-900 text-center">{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;

import React from "react";
import AnimatedNumber from "react-animated-numbers";

const stats = [
    { id: 1, name: 'Kulüp', value: 84 },
    { id: 2, name: 'Üye', value: 4571 },
    { id: 3, name: 'Etkinlik', value: 218 },
];

export default function Example()
{
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                <AnimatedNumber component="text" value={stat.value} duration={1000} />
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}

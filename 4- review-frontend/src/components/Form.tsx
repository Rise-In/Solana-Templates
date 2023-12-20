import { FC } from "react";

interface FormProps {
    title: string;
    description: string;
    rating: number;
    setTitle: (value: string) => void;
    setDescription: (value: string) => void;
    setRating: (value: number) => void;
    handleSubmit: () => void;
}
const ReviewForm: FC<FormProps> = ({
    title,
    description,
    rating,
    setTitle,
    setDescription,
    setRating,
    handleSubmit,
}) => {
    const formSubmit = (e: any) => {
        e.preventDefault();
        if (rating < 0 || rating > 10) {
            alert("Rating must be between 0 and 10.");
            return;
        }
        handleSubmit();
    };
    return (
        <form
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={(e) => formSubmit(e)}
        >
            <div className="w-full max-w-xs">
                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-bold mb-2">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-bold mb-2">
                        Description
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-bold mb-2">
                        Rating
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="rating"
                        type="number"
                        placeholder="Description"
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        max={10}
                        min={0}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ReviewForm;

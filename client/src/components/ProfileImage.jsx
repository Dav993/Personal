// src/components/ProfileImage.jsx
function ProfileImage() {
    return (
        <div className="flex justify-center mt-10 lg:mt-0">
            <img
                src="/profile-image.jpg"
                alt="Foto de David"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 xl:w-52 xl:h-52 2xl:w-64 2xl:h-64 
                object-cover rounded-full border-4 border-[#64ffda] shadow-lg"
            />
        </div>
    );
}

export default ProfileImage;

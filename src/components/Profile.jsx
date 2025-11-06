export default function Profile() {
  const user = {
    username: 'alex',
    name: 'Alex Carter',
    avatar: 'https://i.pravatar.cc/120?img=11',
    bio: 'Design-driven developer. Capturing life in frames. ✨',
    posts: 24,
    followers: 1203,
    following: 341,
    grid: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?q=80&w=800&auto=format&fit=crop',
    ]
  };

  return (
    <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="p-6 flex items-center gap-6">
        <img src={user.avatar} alt="avatar" className="h-24 w-24 rounded-full object-cover ring-2 ring-white dark:ring-neutral-800" />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{user.username}</h2>
            <button className="px-4 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-medium">Edit Profile</button>
          </div>
          <div className="mt-3 flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
            <span><strong className="text-neutral-900 dark:text-neutral-100">{user.posts}</strong> posts</span>
            <span><strong className="text-neutral-900 dark:text-neutral-100">{user.followers}</strong> followers</span>
            <span><strong className="text-neutral-900 dark:text-neutral-100">{user.following}</strong> following</span>
          </div>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">{user.bio}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 sm:gap-2 p-2">
        {user.grid.map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-800">
            <img src={src} alt="post" className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}

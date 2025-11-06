import { useMemo, useState } from 'react';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';

const demoPosts = [
  {
    id: '1',
    user: { username: 'alex', avatar: 'https://i.pravatar.cc/100?img=11' },
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    caption: 'Golden hour coding session #sunset #devlife',
    likes: 128,
    comments: [
      { id: 'c1', user: 'mila', text: 'Love this vibe!' },
      { id: 'c2', user: 'sam', text: 'That light is perfect ✨' }
    ],
    time: '2h'
  },
  {
    id: '2',
    user: { username: 'mila', avatar: 'https://i.pravatar.cc/100?img=12' },
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
    caption: 'Weekend hike with friends #nature #breathe',
    likes: 342,
    comments: [
      { id: 'c3', user: 'alex', text: 'So refreshing!' }
    ],
    time: '5h'
  }
];

export default function Feed() {
  const [posts, setPosts] = useState(demoPosts);
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    setPosts((prev) => prev.map(p => p.id === id ? { ...p, likes: p.likes + (liked[id] ? -1 : 1) } : p));
  };

  const toggleSave = (id) => setSaved((prev) => ({ ...prev, [id]: !prev[id] }));

  const items = useMemo(() => posts, [posts]);

  return (
    <div className="space-y-6">
      {items.map((post) => (
        <article key={post.id} className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
          <div className="flex items-center gap-3 p-4">
            <img src={post.user.avatar} alt="avatar" className="h-9 w-9 rounded-full object-cover" />
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{post.user.username}</p>
              <p className="text-xs text-neutral-500">{post.time} ago</p>
            </div>
          </div>
          <div className="aspect-[4/3] w-full bg-neutral-100 dark:bg-neutral-800">
            <img src={post.image} alt="post" className="h-full w-full object-cover" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-200">
              <button onClick={() => toggleLike(post.id)} className="inline-flex items-center gap-2 hover:text-rose-500 transition">
                <Heart className={`h-5 w-5 ${liked[post.id] ? 'fill-rose-500 text-rose-500' : ''}`} />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="inline-flex items-center gap-2 hover:text-indigo-500 transition">
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">{post.comments.length}</span>
              </button>
              <button onClick={() => toggleSave(post.id)} className="ml-auto hover:text-amber-500 transition">
                <Bookmark className={`h-5 w-5 ${saved[post.id] ? 'fill-amber-500 text-amber-500' : ''}`} />
              </button>
            </div>
            <p className="mt-3 text-sm text-neutral-800 dark:text-neutral-200">
              <span className="font-semibold mr-2">{post.user.username}</span>
              {post.caption}
            </p>
            <div className="mt-3 space-y-1">
              {post.comments.slice(0, 2).map((c) => (
                <p key={c.id} className="text-sm text-neutral-600 dark:text-neutral-300"><span className="font-medium text-neutral-800 dark:text-neutral-200 mr-2">{c.user}</span>{c.text}</p>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

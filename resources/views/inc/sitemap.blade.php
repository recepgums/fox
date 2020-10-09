<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
        <loc>{{ url('/') }}</loc>
        <lastmod>{{ $now }}</lastmod>
        <changefreq>Daily</changefreq>
        <priority>0.8</priority>
    </url>

    @foreach($posts as $post)
        <url>
            <loc>{{ url('/blog-single/').'/'.$post->slug}}</loc>
            <lastmod>{{ $post->created_at->toAtomString() }}</lastmod>
            <changefreq>Daily</changefreq>
            <priority>0.8</priority>
        </url>
    @endforeach

    @foreach($users as $user)
        <url>
            <loc>{{ url('/partner-details').'/'.$user->id}}</loc>
            <lastmod>{{ $post->created_at->toAtomString() }}</lastmod>
            <changefreq>Daily</changefreq>
            <priority>0.8</priority>
        </url>
    @endforeach

</urlset>

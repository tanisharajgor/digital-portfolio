import React from "react";
import "./Immersify.css";

const Immersify = () => {
  return (
    <div className="App">
      <article id="89ba644f-075c-4dde-b54a-06319ec5283d" class="page sans">
        <header>
          <h1 class="page-title">Immersify</h1>
          <p class="page-description"></p>
        </header>
        <div class="page-body">
          <p id="8240a2ba-b69c-4530-aa85-8d7c94804f17" class=""></p>
          <figure id="f4d4a576-dab6-4f98-a94b-9771065006d0" class="image">
            <a href="Immersify%2089ba644f075c4ddeb54a06319ec5283d/image.png">
              <img
                style="width: 637px"
                src="Immersify%2089ba644f075c4ddeb54a06319ec5283d/image.png"
              />
            </a>
          </figure>
          <p id="b06f2d54-01cd-45c3-975a-2c747e381c33" class=""></p>
          <p id="54be7874-b76d-4723-88f9-b2a24a1f8d9c" class="">
            Submission for HackMIT 2023 - Interactive Media Finalist
            <mark class="highlight-default">⭐</mark>
          </p>
          <p id="5daf1bd4-2314-4df9-bf59-6bf3cb10c358" class="">
            Check out:
            <a href="https://devpost.com/software/immersify-ijx4pn?ref_content=user-portfolio&amp;ref_feature=in_progress">
              <span style="border-bottom: 0.05em solid">Devpost</span>
            </a>
            |
            <a href="https://github.com/tylervu1/hackmit/tree/main">
              <span style="border-bottom: 0.05em solid">GitHub</span>
            </a>
          </p>
          <h2 id="0701eac5-c9d5-4b9b-8e50-bb4e34cce2fc" class="">
            <strong>View It In Action</strong>
          </h2>
          <figure id="a00cb396-e7d6-4ee3-a8a3-bc7b4d266e72">
            <div class="source">
              <a href="https://youtu.be/NzATIRVUi8Y">
                https://youtu.be/NzATIRVUi8Y
              </a>
            </div>
          </figure>
          <h2 id="7c3dc59e-0536-4f9e-b584-7c38d3935b58" class="">
            <strong>Inspiration</strong>
          </h2>
          <p id="129f3626-3fb9-4bb3-89c6-edc45ed7cc57" class="">
            The inspiration for our revolutionary software sprang from the
            desire to elevate the way we share our lives and experiences on
            social media. In a world increasingly connected through pictures and
            videos, we envisioned taking storytelling a notch higher — by
            introducing <strong>Immersive Stories</strong>. We sought to
            transform 3D rendering into an engaging medium where you can
            literally walk people through your experiences, not just show them. 
            <strong>
              Imagine not just viewing a friend&#x27;s vacation photo but
              stepping into their reality, exploring the picturesque
              environments as if you were there.
            </strong>
             It&#x27;s about bringing depth, dimension, and a dynamic
            perspective to social sharing, ushering in a new era of interactive
            and immersive storytelling where distances diminish, and experiences
            become more vibrant, vivid, and real. It&#x27;s not just sharing;
            it&#x27;s inviting friends into your world, offering a walkthrough
            of your moments, 
            <strong>
              redefining connection and interaction in the digital age
            </strong>
            .
          </p>
          <h2 id="b95e17ff-52de-4285-9a56-5a8f42e35cf3" class="">
            <strong>What It Does</strong>
          </h2>
          <p id="114a87db-d84e-4669-b5d4-8d63c6814f80" class="">
            Our software brings your videos to life, converting them into
            navigable 3D spaces. 
            <strong>
              Start by recording a video of any environment or object
            </strong>
            , then use the software to 
            <strong>transform that footage into a digital 3D realm</strong>,
            ready to explore in-depth. This tool unlocks a new layer of
            interaction, letting users virtually step into the spaces and
            moments captured, offering a richer, more immersive way to share and
            experience content. <strong>It&#x27;s more than viewing</strong>;
            it&#x27;s about experiencing, walking around, and feeling closer to
            the real thing, all from the user&#x27;s perspective.
          </p>
          <h2 id="9ecb6d54-3c57-4246-9fec-925b18844826" class="">
            <strong>How We Build It</strong>
          </h2>
          <p id="af31fa05-18fd-4571-9821-0597e6e751b8" class="">
            Building this innovative software initiated with the meticulous
            crafting of our <strong>user interface in Unity</strong>, a robust
            platform known for its expansive functionalities and user-friendly
            features. The backbone of the process is the seamless integration of
            users&#x27; <strong>Immersive Stories</strong> into the platform;
            they simply upload their videos, which are subsequently 
            <strong>dissected into individual frames</strong>.
          </p>
          <p id="e64f3579-7cf9-40c6-8fa7-cbfedcccc8f1" class="">
            Next, we instituted a 
            <strong>
              Python script that effectively scrutinizes each frame, identifying
              and eliminating all blurry images
            </strong>
             to ensure only the crispest, clearest frames are utilized. This
            filtering is a crucial step, paving the way for the high-definition
            3D renderings that come next.
          </p>
          <p id="8e5b3747-fa0a-4209-8b0b-fd60aa421c1d" class="">
            The selected frames then move to the next pivotal stage, being 
            <strong>processed by NeRF (Neural Radiance Fields)</strong> which,
            with the assistance of cutting-edge AI technology, 
            <strong>
              converts them into astonishingly realistic 3D renderings
            </strong>
            . It is a transformative phase where two-dimensional images
            metamorphose into three-dimensional spaces endowed with depth,
            texture, and nuance.
          </p>
          <p id="64653eea-b4bd-4a90-a6ae-2ba6e3386692" class="">
            Once the NeRF has worked its magic, the 3D rendering is prepared for
            user interaction; it is 
            <strong>
              first exported as a .ply file before being converted to a .obj
              file
            </strong>
            , enabling it to be finely presented back in the Unity interface.
          </p>
          <p id="d77e33fb-5cc9-47af-a2bc-76e9ae5d4399" class="">
            The final product is a user’s <strong>Immersive Story</strong>,
            ready to be 
            <strong>
              navigated with intuitive ease using the WASD or arrow keys
            </strong>
            , offering users not just a viewing experience, but a vibrant,
            lifelike journey through their captured moments. Every detail has
            been conceived with the user’s immersive experience at the
            forefront, culminating in a tool that transcends traditional
            storytelling.
          </p>
          <h2 id="7c01dd17-5b14-4418-964b-c7cdc19646fe" class="">
            <strong>Challenges We Ran Into </strong>
          </h2>
          <p id="c6118782-b525-48ff-a1a2-723c319b8b01" class="">
            In the developmental stages, we encountered 
            <strong>
              significant challenges while trying to run NVIDIA NGP
            </strong>
            , especially during the construction of our own NeRF. The main
            hindrance came in the form of missing dependencies, a hurdle that
            not only slowed our progress but required meticulous troubleshooting
            to identify and rectify the absent elements. 
            <strong>
              This necessitated a deeper dive into the intricate web of
              dependencies, enhancing our understanding and facilitating a more
              robust build
            </strong>
            . Despite these setbacks, our team kept pushing, applying tenacity
            and expertise to navigate through the complexities and keep the
            project advancing forward.
          </p>
          <h2 id="27aaab40-8863-404a-ae93-b27e96b8625f" class="">
            <strong>Accomplishments</strong>
          </h2>
          <p id="2616f71f-cc3f-4a9d-80e7-12eece05158f" class="">
            We are incredibly proud of the strides we have made in making NeRF
            technology 
            <strong>
              accessible and user-friendly through our native platform
            </strong>
            . By automating the traditionally laborious process of using NeRF,
            we have managed to remove the barriers to entry, 
            <strong>
              allowing a wider audience to create their own Immersive Stories
              without the hassle
            </strong>
            . This innovation not only brings a fresh, dynamic way to share
            experiences but is a milestone in fostering inclusivity in the
            digital storytelling landscape. It&#x27;s a step toward a world
            where detailed, rich, and immersive narratives are not a privilege
            but a norm, accessible and easily crafted by all.
          </p>
          <h2 id="e88b6dd5-b065-49eb-a9c0-d3dc6e0b85f4" class="">
            <strong>What We Learned</strong>
          </h2>
          <p id="a02d405d-c666-4aaf-bd03-9d21dcb9c63b" class="">
            One of the essential skills acquired was 
            <strong>mastering Unity</strong>, a multifaceted platform where we 
            <strong>
              not only built a visually pleasing and intuitive interface but
              also integrated custom API calls,
            </strong>
             enhancing the functionality and user experience remarkably.
          </p>
          <p id="12c52b51-4a0e-4072-a920-2b9932c939f4" class="">
            Another cornerstone in our developmental journey was 
            <strong>constructing our own NeRF system</strong>, meticulously 
            <strong>
              tying it into our API calls to automate intricate processes
            </strong>
             that historically demanded a significant time investment. This deep
            integration paved the way for a more streamlined and efficient
            workflow, which stands as a testament to our team&#x27;s ingenuity
            and technical prowess.
          </p>
          <p id="91e0dce4-7cb5-4171-9f41-0a989b23f4db" class="">
            To further refine the output and boost efficiency, 
            <strong>
              we took it upon ourselves to develop an additional machine
              learning model, dedicated to identifying and removing blurry
              images from the video input
            </strong>
            . This forward-thinking addition facilitated 
            <strong>faster and cleaner convergence of NeRF</strong>, thereby not
            only speeding up the processing time but also remarkably improving
            the quality of the 3D renderings. It was a journey of constant
            learning, bringing together a tapestry of technologies to craft a
            tool that stands at the frontier of immersive digital storytelling.
          </p>
          <h2 id="bb4c84f5-8208-48fd-8ad6-57e6e8ad47b5" class="">
            <strong>What&#x27;s Next</strong>
          </h2>
          <p id="0f15ade3-3dfa-4174-bf5e-298b360fc155" class="">
            As Immersify continues to evolve, 
            <strong>
              the next milestone is venturing into the mobile sphere to redefine
              how stories are shared and experienced
            </strong>
             on popular platforms like Instagram and Snapchat. While currently
            housed exclusively within Unity, the plan is to transition into a
            mobile-friendly format, potentially laying the groundwork for its
            own revolutionary social media platform. Whether integrating with
            existing giants or pioneering its own space, 
            <strong>
              Immersify is poised to bring 3D immersive stories to the
              fingertips of users globally
            </strong>
            , offering a richer, more interactive storytelling canvas that
            mirrors the dynamic nature of real-life experiences.
          </p>
          <p id="35288127-9d7e-4f48-84dc-066d55ceb8e0" class=""></p>
          <figure id="f2433656-f7a5-40ed-ab68-878f77ab9919" class="image">
            <a href="Immersify%2089ba644f075c4ddeb54a06319ec5283d/image%201.png">
              <img
                style="width: 806px"
                src="Immersify%2089ba644f075c4ddeb54a06319ec5283d/image%201.png"
              />
            </a>
          </figure>
        </div>
      </article>
      <span class="sans" style="font-size: 14px; padding-top: 2em"></span>
    </div>
  );
};

export default Immersify;

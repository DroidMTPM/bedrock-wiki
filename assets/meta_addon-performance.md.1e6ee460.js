import{_ as e,c as t,o as i,e as a}from"./404.md.5c32d6e1.js";const p=JSON.parse('{"title":"Addon Performance","description":"","frontmatter":{"title":"Addon Performance","mentions":["SirLich","Joelant05","MedicalJewel105","TheItsNameless","SmokeyStack"]},"headers":[{"level":2,"title":"Biomes and Features","slug":"biomes-and-features","link":"#biomes-and-features","children":[{"level":3,"title":"Biomes","slug":"biomes","link":"#biomes","children":[]},{"level":3,"title":"Features","slug":"features","link":"#features","children":[]}]},{"level":2,"title":"Blocks","slug":"blocks","link":"#blocks","children":[{"level":3,"title":"Materials","slug":"materials","link":"#materials","children":[]},{"level":3,"title":"Quantity and Type","slug":"quantity-and-type","link":"#quantity-and-type","children":[]},{"level":3,"title":"Updates","slug":"updates","link":"#updates","children":[]}]},{"level":2,"title":"Commands","slug":"commands","link":"#commands","children":[{"level":3,"title":"Quantity and Type","slug":"quantity-and-type-1","link":"#quantity-and-type-1","children":[]},{"level":3,"title":"Selectors","slug":"selectors","link":"#selectors","children":[]},{"level":3,"title":"Tags vs. Scoreboards","slug":"tags-vs-scoreboards","link":"#tags-vs-scoreboards","children":[]}]},{"level":2,"title":"Entities","slug":"entities","link":"#entities","children":[{"level":3,"title":"Components","slug":"components","link":"#components","children":[]},{"level":3,"title":"Dummy Entities","slug":"dummy-entities","link":"#dummy-entities","children":[]},{"level":3,"title":"Geometry","slug":"geometry","link":"#geometry","children":[]},{"level":3,"title":"Materials","slug":"materials-1","link":"#materials-1","children":[]},{"level":3,"title":"Quantity","slug":"quantity","link":"#quantity","children":[]}]},{"level":2,"title":"Lighting","slug":"lighting","link":"#lighting","children":[{"level":3,"title":"Map Considerations","slug":"map-considerations","link":"#map-considerations","children":[]},{"level":3,"title":"Sources","slug":"sources","link":"#sources","children":[]}]},{"level":2,"title":"Molang","slug":"molang","link":"#molang","children":[{"level":3,"title":"Recursion","slug":"recursion","link":"#recursion","children":[]},{"level":3,"title":"Structs","slug":"structs","link":"#structs","children":[]},{"level":3,"title":"Variables","slug":"variables","link":"#variables","children":[]}]},{"level":2,"title":"Textures","slug":"textures","link":"#textures","children":[{"level":3,"title":"texture_list.json","slug":"texture-list-json","link":"#texture-list-json","children":[]},{"level":3,"title":"Quantity","slug":"quantity-1","link":"#quantity-1","children":[]},{"level":3,"title":"Resolution","slug":"resolution","link":"#resolution","children":[]}]},{"level":2,"title":"Trades","slug":"trades","link":"#trades","children":[]},{"level":2,"title":"Sounds","slug":"sounds","link":"#sounds","children":[{"level":3,"title":"Count","slug":"count","link":"#count","children":[]},{"level":3,"title":"Compression","slug":"compression","link":"#compression","children":[]},{"level":3,"title":"Streaming","slug":"streaming","link":"#streaming","children":[]}]},{"level":2,"title":"Redstone","slug":"redstone","link":"#redstone","children":[{"level":3,"title":"Chunk Boundaries","slug":"chunk-boundaries","link":"#chunk-boundaries","children":[]},{"level":3,"title":"Command Blocks","slug":"command-blocks","link":"#command-blocks","children":[]}]},{"level":2,"title":"Ticking Areas","slug":"ticking-areas","link":"#ticking-areas","children":[]},{"level":2,"title":"Files","slug":"files","link":"#files","children":[]}],"relativePath":"meta/addon-performance.md"}'),l={name:"meta/addon-performance.md"},n=a('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This page was compiled primarily using community feedback from multiple sources. As a result, some information may be generalized, subjective, or conflicting. Always use your own best judgment when optimizing your addons. This page is not a substitute for testing your addon on a wide range of devices.</p></div><p>Performance in addons is crucial, as the most technically fantastic addon is mainly useless if the majority of the player base cannot experience it. When developing addons, it should always be considered that many Bedrock players will be experiencing your addon on a significantly lower power device than you are developing on. This is especially true for mobile users. Therefore, addons should be developed with performance in mind and tested for performance on lower-end devices when possible.</p><p>This guide is a non-exhaustive list of specific performance considerations separated by the various subsystems of Bedrock Edition. No single point should be taken as a hard and fast rule. Instead, these performance considerations should help you to recognize potential areas for improvement.</p><h2 id="biomes-and-features" tabindex="-1">Biomes and Features <a class="header-anchor" href="#biomes-and-features" aria-hidden="true">#</a></h2><h3 id="biomes" tabindex="-1">Biomes <a class="header-anchor" href="#biomes" aria-hidden="true">#</a></h3><ul><li>The biome system is generally efficient</li><li>Large values for heightmaps are usually handled gracefully</li><li>The component <code>climate</code> creates large particle storms</li></ul><h3 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h3><ul><li>Biomes generally cause less lag than feature generation.</li><li>Hundreds of iterations per chunk of a multi-block feature have been achieved at a low-performance cost.</li><li>Thousands of iterations per chunk of multi-block features negatively impact gameplay.</li><li>Hundreds of thousands of iterations per chunk of a single-block feature have been achieved at a low-performance cost.</li><li>Thousands of instances of features <em>per chunk</em> comes at little cost.</li><li>Tens of thousands of feature instances <em>per chunk</em> yields a noticeable impact on chunk loading.</li><li>Hundreds of thousands of instances of features <em>per chunk</em> slows chunk loading to an unbearable crawl.</li></ul><h2 id="blocks" tabindex="-1">Blocks <a class="header-anchor" href="#blocks" aria-hidden="true">#</a></h2><h3 id="materials" tabindex="-1">Materials <a class="header-anchor" href="#materials" aria-hidden="true">#</a></h3><ul><li>The minimum needed material type with regards to rendering should always be utilized</li></ul><blockquote><p><code>alpha_blend</code> performance is worse than <code>alpha_test</code>, which is worse than <code>opaque</code></p></blockquote><h3 id="quantity-and-type" tabindex="-1">Quantity and Type <a class="header-anchor" href="#quantity-and-type" aria-hidden="true">#</a></h3><ul><li>Flowing liquids should be avoided and minimized</li></ul><h3 id="updates" tabindex="-1">Updates <a class="header-anchor" href="#updates" aria-hidden="true">#</a></h3><ul><li>Block updates should be minimized</li></ul><h2 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h2><h3 id="quantity-and-type-1" tabindex="-1">Quantity and Type <a class="header-anchor" href="#quantity-and-type-1" aria-hidden="true">#</a></h3><ul><li>Minimize the number of commands run per tick</li></ul><blockquote><p><code>/effect</code> and <code>/gamemode</code> run every tick are avoidable and have a significant performance impact</p></blockquote><ul><li>Large clones, fills and structure loads during runtime should be avoided</li></ul><blockquote><p>Breaking these more extensive operations into multiple commands distributed over multiple ticks will avoid lag spikes, consider using structure loading animations</p></blockquote><h3 id="selectors" tabindex="-1">Selectors <a class="header-anchor" href="#selectors" aria-hidden="true">#</a></h3><ul><li>Care should be taken to ensure a function is not executed on too many entities, and therefore too many times</li><li>Executing a scoreboard command outweighs the cost of running an entity selector multiple times</li><li>Using c=1 to ensure the selector stops when it finds one entity may improve performance</li><li>When executing multiple commands with the same selector, use a function instead to avoid repeatedly resolving the same selector</li></ul><h3 id="tags-vs-scoreboards" tabindex="-1">Tags vs. Scoreboards <a class="header-anchor" href="#tags-vs-scoreboards" aria-hidden="true">#</a></h3><ul><li>Scoreboards perform better at a large scale than tags</li></ul><h2 id="entities" tabindex="-1">Entities <a class="header-anchor" href="#entities" aria-hidden="true">#</a></h2><ul><li>Entities generally have one of the most significant performance impacts by subsystem and thus should be minimized where possible</li></ul><h3 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h3><ul><li>Pathfinding on flying mobs has a significant performance cost</li><li>Flying mobs in general encounter performance problems</li></ul><blockquote><p>Faking flying mobs via animation should be considered if possible</p></blockquote><h3 id="dummy-entities" tabindex="-1">Dummy Entities <a class="header-anchor" href="#dummy-entities" aria-hidden="true">#</a></h3><ul><li>Dummy entities generally have equal performance impact to proper entities, except when excluding heavy components like pathfinding</li></ul><h3 id="geometry" tabindex="-1">Geometry <a class="header-anchor" href="#geometry" aria-hidden="true">#</a></h3><h4 id="bones" tabindex="-1">Bones <a class="header-anchor" href="#bones" aria-hidden="true">#</a></h4><ul><li>No performance impact has been observed regarding bone count</li></ul><h4 id="elements" tabindex="-1">Elements <a class="header-anchor" href="#elements" aria-hidden="true">#</a></h4><ul><li>Element count is not generally an issue, except in extreme cases when thousands of elements are reached</li></ul><h3 id="materials-1" tabindex="-1">Materials <a class="header-anchor" href="#materials-1" aria-hidden="true">#</a></h3><ul><li>The minimum material required to achieve the desired effect should always be used</li><li>When in doubt, refer to the material definition files to get an idea of the costs of various materials, taking the material inheritance system into account</li></ul><h3 id="quantity" tabindex="-1">Quantity <a class="header-anchor" href="#quantity" aria-hidden="true">#</a></h3><ul><li>Loaded entities at any given time should be minimized</li></ul><blockquote><p>Below 30 is optimal</p></blockquote><h2 id="lighting" tabindex="-1">Lighting <a class="header-anchor" href="#lighting" aria-hidden="true">#</a></h2><h3 id="map-considerations" tabindex="-1">Map Considerations <a class="header-anchor" href="#map-considerations" aria-hidden="true">#</a></h3><ul><li>Hollow areas will cause lag due to lighting calculations even if you don&#39;t see them</li></ul><blockquote><p>Avoid this by filling in unused enclosed areas</p></blockquote><ul><li>Keeping the map set to day or night will avoid lighting recalculation</li></ul><h3 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-hidden="true">#</a></h3><ul><li>Bedrock lighting is calculated dynamically, meaning different light sources have different performance costs</li></ul><blockquote><p>Light blocks are the most performant because they lack particles, rendering, and particular state logic</p></blockquote><blockquote><p>Torches are a minor performance issue because they emit particles, render, and have particular state logic dependent on what block they connect to</p></blockquote><blockquote><p>Custom light blocks with minimal components are a reasonable compromise between performance and aesthetics</p></blockquote><h4 id="comparison-table" tabindex="-1">Comparison Table <a class="header-anchor" href="#comparison-table" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:right;">Light Source</th><th style="text-align:center;">Score</th><th style="text-align:center;">Redstone Updates</th><th style="text-align:center;">Animted Texture</th><th style="text-align:center;">Light Updates</th><th style="text-align:center;">Tick Updates</th><th style="text-align:center;">Particles</th><th style="text-align:center;">Renders</th></tr></thead><tbody><tr><td style="text-align:right;">Light Blocks</td><td style="text-align:center;">1</td><td style="text-align:center;">False</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td><td style="text-align:center;">False</td><td style="text-align:center;">False</td><td style="text-align:center;">False</td></tr><tr><td style="text-align:right;">Lanterns</td><td style="text-align:center;">4</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td><td style="text-align:center;">True</td><td style="text-align:center;">True</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td></tr><tr><td style="text-align:right;">Custom Blocks</td><td style="text-align:center;">2</td><td style="text-align:center;">False</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td><td style="text-align:center;">False</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td></tr><tr><td style="text-align:right;">Mushrooms</td><td style="text-align:center;">3</td><td style="text-align:center;">False</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td><td style="text-align:center;">True</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td></tr><tr><td style="text-align:right;">Redstone Lamps</td><td style="text-align:center;">3</td><td style="text-align:center;">True</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td><td style="text-align:center;">False</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td></tr><tr><td style="text-align:right;">Glowstone</td><td style="text-align:center;">3</td><td style="text-align:center;">True</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td><td style="text-align:center;">True</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td></tr><tr><td style="text-align:right;">Sea Lanterns</td><td style="text-align:center;">4</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td><td style="text-align:center;">True</td><td style="text-align:center;">True</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td></tr><tr><td style="text-align:right;">Torches</td><td style="text-align:center;">4</td><td style="text-align:center;">False</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td><td style="text-align:center;">True</td><td style="text-align:center;">True</td><td style="text-align:center;">True</td></tr><tr><td style="text-align:right;">Redstone Torches</td><td style="text-align:center;">5</td><td style="text-align:center;">True</td><td style="text-align:center;">False</td><td style="text-align:center;">True</td><td style="text-align:center;">True</td><td style="text-align:center;">True</td><td style="text-align:center;">True</td></tr></tbody></table><h2 id="molang" tabindex="-1">Molang <a class="header-anchor" href="#molang" aria-hidden="true">#</a></h2><h3 id="recursion" tabindex="-1">Recursion <a class="header-anchor" href="#recursion" aria-hidden="true">#</a></h3><ul><li>Minimize use of recursion when possible</li><li>Intense nested loop structures will cause performance issues</li><li>Use break to escape loops when possible</li></ul><h3 id="structs" tabindex="-1">Structs <a class="header-anchor" href="#structs" aria-hidden="true">#</a></h3><ul><li>Avoid making structs too deep, as there is a performance cost with each layer</li></ul><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h3><ul><li>Use temp variables when possible to minimize variables loaded in memory</li><li>Consider how often variables are calculated based on script type</li></ul><h2 id="textures" tabindex="-1">Textures <a class="header-anchor" href="#textures" aria-hidden="true">#</a></h2><h3 id="texture-list-json" tabindex="-1">texture_list.json <a class="header-anchor" href="#texture-list-json" aria-hidden="true">#</a></h3><ul><li>Tons of textures badly affect game performance. Create a <a href="/concepts/textures-list.html"><code>texture_list.json</code></a> file.</li></ul><h3 id="quantity-1" tabindex="-1">Quantity <a class="header-anchor" href="#quantity-1" aria-hidden="true">#</a></h3><ul><li>No more than 3000 textures should be used</li></ul><blockquote><p>This is due to limits imposed by Render Dragon</p></blockquote><blockquote><p>Render Dragon has a 4096 texture quantity limit, and there are 800 vanilla textures as of 1.16</p></blockquote><h3 id="resolution" tabindex="-1">Resolution <a class="header-anchor" href="#resolution" aria-hidden="true">#</a></h3><ul><li>The maximum texture resolution is 16384x16384</li><li>The recommended maximum texture resolution is 4096x4096 to maintain compatibility with low-end devices</li><li>Keep in mind that textures are atlased, and larger textures can mess with atlas generation on lower-end devices</li><li>Only make textures as significant as needed to convey the detail needed at the needed distance</li></ul><h2 id="trades" tabindex="-1">Trades <a class="header-anchor" href="#trades" aria-hidden="true">#</a></h2><p>Villager trades cause performance issues and even crashes on all devices at 60 trades or greater. Avoid tons of trades for one entity. Your best bet to resolve this issue is to split your trades in half and move them to another villager or custom entity/npc, 30 trades is a good safe number from testing. <em>probably JSON UI issues</em></p><h2 id="sounds" tabindex="-1">Sounds <a class="header-anchor" href="#sounds" aria-hidden="true">#</a></h2><h3 id="count" tabindex="-1">Count <a class="header-anchor" href="#count" aria-hidden="true">#</a></h3><ul><li>Total registered sounds are reported to have an impact on performance</li></ul><h3 id="compression" tabindex="-1">Compression <a class="header-anchor" href="#compression" aria-hidden="true">#</a></h3><ul><li>Sound compression is exceptionally beneficial to pack size</li><li>This is especially noticeable on older and low power devices, such as the Switch</li><li>The FMod simple API utilized by Bedrock decompresses all sounds into WAV before loading into RAM, meaning no CPU performance improvement in this respect</li></ul><blockquote><p>If audio is streamed, this does not occur</p></blockquote><h3 id="streaming" tabindex="-1">Streaming <a class="header-anchor" href="#streaming" aria-hidden="true">#</a></h3><ul><li>As general guidance, sounds over 500kb in size or 1 minute in length should be streamed</li></ul><h2 id="redstone" tabindex="-1">Redstone <a class="header-anchor" href="#redstone" aria-hidden="true">#</a></h2><h3 id="chunk-boundaries" tabindex="-1">Chunk Boundaries <a class="header-anchor" href="#chunk-boundaries" aria-hidden="true">#</a></h3><ul><li>Crossing chunk boundaries with Redstone should be avoided</li></ul><h3 id="command-blocks" tabindex="-1">Command Blocks <a class="header-anchor" href="#command-blocks" aria-hidden="true">#</a></h3><ul><li>When creating large command blockchains, stack vertically and in a single chunk</li><li>Minimize command block use in favor of functions and behaviors where possible</li></ul><h2 id="ticking-areas" tabindex="-1">Ticking Areas <a class="header-anchor" href="#ticking-areas" aria-hidden="true">#</a></h2><ul><li>Total chunks are of more significant concern than ticking areas</li><li>Dynamic areas should be avoided unless necessary</li><li>Best practice is to minimizing the ticking area to one chunk if possible</li></ul><blockquote><p>All always-on Redstone should fit in this ticking chunk</p></blockquote><ul><li>Unload ticking areas when they are no longer needed, testing via /testforblock</li></ul><h2 id="files" tabindex="-1">Files <a class="header-anchor" href="#files" aria-hidden="true">#</a></h2><ul><li>Tons of files can badly affect game performance. Create a <a href="/concepts/contents.html"><code>contents.json</code></a> file.</li></ul>',92),s=[n];function r(d,o,c,h,u,m){return i(),t("div",null,s)}const y=e(l,[["render",r]]);export{p as __pageData,y as default};

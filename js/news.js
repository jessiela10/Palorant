document.addEventListener("DOMContentLoaded", function () {
        const newsData = {
          featured: {
            title: 'New Agent Coming Next Week: Meet "Phantom"',
            date: "April 22, 2025",
            tag: "Featured",
            image: "./assets/images/Beejpg.jpg",
            content: `
              <p>Get ready to welcome our newest agent to the battlefield. Phantom brings unprecedented stealth abilities and tactical advantages that will change the way you approach each match.</p>
              <p>Phantom's abilities include:</p>
              <ul>
                <li><strong>Shadow Step:</strong> Teleport short distances through shadows</li>
                <li><strong>Veil of Darkness:</strong> Create a smokescreen that blocks vision</li>
                <li><strong>Eclipse:</strong> Ultimate ability that temporarily blinds enemies in a radius</li>
              </ul>
              <p>The agent will be available starting next Tuesday, April 29th. Players can unlock Phantom for free by completing the new agent contract or purchase immediately with Palorant Points.</p>
              <p>Our design team has worked hard to ensure Phantom brings a fresh playstyle to the game while maintaining competitive balance. We're excited to see how players incorporate this new agent into their strategies.</p>
            `,
          },
          1: {
            title: "Patch 6.2: Balance Changes and Bug Fixes",
            date: "April 18, 2025",
            tag: "Update",
            image: "./assets/images/Balance.jpg",
            content: `
              <p>This patch brings major balance adjustments to several agents and weapons, addressing community feedback from the past month of gameplay.</p>
              
              <h3>Agent Changes</h3>
              <p><strong>Viper:</strong> Toxic Screen duration increased from 12s to 15s. Fuel drain rate decreased by 10%.</p>
              <p><strong>Jett:</strong> Tailwind (dash) cooldown increased from 12s to 15s.</p>
              <p><strong>Sage:</strong> Healing orb cooldown decreased from 45s to 40s.</p>
              
              <h3>Weapon Updates</h3>
              <p><strong>Operator:</strong> Movement speed while scoped decreased by 5%.</p>
              <p><strong>Phantom:</strong> First shot accuracy improved by 10%.</p>
              <p><strong>Frenzy:</strong> Recoil pattern adjusted to be more predictable.</p>
              
              <h3>Bug Fixes</h3>
              <ul>
                <li>Fixed an issue where some abilities would not register hits correctly on moving targets</li>
                <li>Resolved a bug that caused occasional frame drops on Bind</li>
                <li>Fixed collision issues on Ascent near A site</li>
                <li>Various UI improvements and minor bug fixes</li>
              </ul>
              
              <p>The full patch notes with all changes are available on our official website.</p>
            `,
          },
          2: {
            title: "Night Market Returns With Exclusive Skins",
            date: "April 15, 2025",
            tag: "Event",
            image: "./assets/images/NightMarket.jpg",
            content: `
              <p>The popular Night Market event is back with rare weapon skins at discounted prices for a limited time!</p>
              
              <p>From now until May 1st, check your Night Market for 6 randomly selected premium skins with discounts ranging from 20% to 50% off. This rotation includes skins from:</p>
              
              <ul>
                <li>Elderflame Collection</li>
                <li>Prime Collection</li>
                <li>Reaver Collection</li>
                <li>Oni Collection</li>
                <li>New Singularity Collection</li>
              </ul>
              
              <p>Each player's Night Market is unique, so be sure to check yours daily as the selection may change. Some players have reported finding ultra-rare variants like the Elderflame Vandal or Prime Phantom at steep discounts!</p>
              
              <p>Pro Tip: The Night Market resets every 24 hours, so check back often for new deals. This is the perfect opportunity to grab that skin you've been wanting at a fraction of the normal price.</p>
              
              <p>Happy shopping, agents!</p>
            `,
          },
          3: {
            title: "Global Championship Finals Breaks Records",
            date: "April 12, 2025",
            tag: "Esports",
            image: "./assets/images/Global Champ.jpg",
            content: `
              <p>Last weekend's thrilling Global Championship Finals attracted over 2 million concurrent viewers worldwide, setting a new record for tactical FPS esports.</p>
              
              <p>In an intense best-of-5 series that went the full distance, Team Phoenix defeated defending champions Nova Esports 3-2 in front of a sold-out crowd at the Berlin Arena. The final match on Ascent featured an incredible 1v4 clutch by Phoenix's star player "Inferno" to secure the championship.</p>
              
              <h3>Tournament Highlights</h3>
              <ul>
                <li>Peak viewership: 2.1 million concurrent across all platforms</li>
                <li>Total prize pool: $2,000,000 (largest in Palorant history)</li>
                <li>Match MVP: "Inferno" with a 1.43 tournament K/D ratio</li>
                <li>Most picked agent: Jett (72% pick rate)</li>
              </ul>
              
              <p>The tournament also featured the world premiere of the new Agent Phantom, with a special showcase match demonstrating the agent's abilities. Phantom will be available in-game next week.</p>
              
              <p>"This was our most successful championship yet," said Palorant Esports Director. "The level of play continues to rise, and we're excited to see how the meta evolves with our new agent joining the roster."</p>
              
              <p>VODs of all matches are available on the official Palorant Esports YouTube channel.</p>
            `,
          },
          4: {
            title: 'New Map "Nexus" Coming in Season 7',
            date: "April 10, 2025",
            tag: "Update",
            image: "./assets/images/MapsUpdate.jpg",
            content: `
              <p>Get ready to explore Nexus, our upcoming map set in a futuristic research facility, launching with Season 7 on May 15th!</p>
              
              <h3>Map Features</h3>
              <p>Nexus introduces several innovative gameplay elements:</p>
              
              <ul>
                <li><strong>Gravity Zones:</strong> Certain areas have reduced gravity, allowing for vertical gameplay</li>
                <li><strong>Research Labs:</strong> Interactive elements that can temporarily alter vision or movement</li>
                <li><strong>Central Atrium:</strong> A multi-level focal point with rotating platforms</li>
              </ul>
              
              <p>The map is set in a top-secret research facility studying dimensional technology, which explains the unusual environmental effects. Visually, Nexus features a sleek, high-tech aesthetic with glowing blue accents and transparent surfaces.</p>
              
              <h3>Competitive Testing</h3>
              <p>Nexus has undergone extensive testing with pro players to ensure competitive integrity. "Nexus changes how you think about positioning and map control," said pro player 'Spectre'. "The gravity zones add a whole new dimension to gameplay."</p>
              
              <p>Starting May 1st, Nexus will be available in a special preview playlist so players can familiarize themselves with the layout before its competitive debut.</p>
              
              <p>Season 7 will also introduce a new Battlepass with Nexus-themed cosmetics, including weapon skins, player cards, and a new spray.</p>
            `,
          },
        };

        const newsListing = document.getElementById("newsListing");
        const newsDetail = document.getElementById("newsDetail");
        const backButton = document.getElementById("backButton");
        const detailTitle = document.getElementById("detailTitle");
        const detailDate = document.getElementById("detailDate");
        const detailTag = document.getElementById("detailTag");
        const detailImage = document.getElementById("detailImage");
        const detailBody = document.getElementById("detailBody");

        document.querySelectorAll(".news-link").forEach((link) => {
          link.addEventListener("click", function (e) {
            e.preventDefault();
            const newsId = this.getAttribute("data-id");
            showNewsDetail(newsId);
          });
        });

        document.querySelectorAll(".news-item").forEach((item) => {
          item.addEventListener("click", function (e) {
            if (e.target.tagName === "A" || e.target.tagName === "BUTTON")
              return;

            const newsId = this.getAttribute("data-id");
            showNewsDetail(newsId);
          });
        });

        backButton.addEventListener("click", function (e) {
          e.preventDefault();
          newsListing.style.display = "block";
          newsDetail.style.display = "none";
          window.scrollTo(0, 0);
        });

        function showNewsDetail(newsId) {
          const news = newsData[newsId];
          if (!news) return;

          detailTitle.textContent = news.title;
          detailDate.textContent = news.date;
          detailTag.textContent = news.tag;
          detailImage.src = news.image;
          detailImage.alt = news.title;
          detailBody.innerHTML = news.content;

          newsListing.style.display = "none";
          newsDetail.style.display = "block";

          window.scrollTo(0, 0);
        }
      });
// Auto Headz JS Core Application
// Handles search, filtering, comparison, reviews, and custom styling theme settings.

// State Management
const STATE = {
    filters: {
        search: '',
        category: 'All',
        brand: 'All',
        transmission: 'All',
        fuel: 'All',
        minPrice: 0,
        maxPrice: 250000000, // 25 Crore (expressed in INR)
        sortBy: 'default' // default, price-asc, price-desc, hp-desc, speed-desc
    },
    compareList: [], // holds up to 3 car objects
    themeColor: localStorage.getItem('autoheadz-theme') || 'red',
    activeModalCar: null
};

// Map color codes to theme picker
const THEME_MAP = {
    red: { hex: '#ff3c00', rgb: '255, 60, 0' },
    blue: { hex: '#00d2ff', rgb: '0, 210, 255' },
    purple: { hex: '#bd00ff', rgb: '189, 0, 255' },
    green: { hex: '#39ff14', rgb: '57, 255, 20' }
};

// News feed data
const NEWS_DATA = [
    {
        title: "The W16 Successor: Bugatti's Next Hybrid Monster Revealed",
        date: "May 18, 2026",
        source: "Gear News",
        summary: "Bugatti has pulled the wraps off its new hybrid hypercar, featuring a screaming naturally aspirated V16 engine coupled with quad electric motors, producing a mind-blowing 1800 horsepower.",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b"
    },
    {
        title: "Solid-State Batteries: Toyota Claims 1,200 km Range by 2027",
        date: "May 15, 2026",
        source: "EV Tech Daily",
        summary: "In a groundbreaking announcement, Toyota confirmed the production timeline for its solid-state battery technology, promising charging times of under 10 minutes and double the range of current EVs.",
        image: "https://images.unsplash.com/photo-1612563893490-d86ed296e5e6"
    },
    {
        title: "Classic JDM Revivals: Nissan Confirms Electric GT-R R36 Silhouette",
        date: "May 10, 2026",
        source: "JDM Legends",
        summary: "Nissan design chiefs have teased the upcoming silhouette of the R36 GT-R, hinting at carbon-fibre composites, quad circular taillights, and a hybrid e-4ORCE all-wheel-drive powertrain.",
        image: "https://images.unsplash.com/photo-1589144707419-7032065267e1"
    }
];

// Normalize car brand names (fix "Range" -> "Land Rover")
CARS_DATA.forEach(car => {
    if (car.brand === "Range" || car.name.toLowerCase().startsWith("range rover")) {
        car.brand = "Land Rover";
    }
    // Set a clean numeric price for sorting/filtering
    car.numericPrice = parsePriceToINR(car.specs.Price);
    
    // Set a clean numeric horsepower
    if (car.specs.Horsepower) {
        car.numericHP = parseInt(car.specs.Horsepower) || 0;
    } else {
        car.numericHP = 0;
    }

    // Set a clean numeric top speed
    if (car.specs["Top Speed"]) {
        car.numericSpeed = parseInt(car.specs["Top Speed"]) || 0;
    } else {
        car.numericSpeed = 0;
    }
});

// Helper: Parse various price formats ($3 Million, ₹3.30 Crore, ₹74 Lakh) into numeric INR
function parsePriceToINR(priceStr) {
    if (!priceStr) return 0;
    let cleanStr = priceStr.replace(/[₹$,]/g, '').trim().toLowerCase();
    
    // Check if Dollar-based (approximate $1 = ₹83.5 for standardisation)
    if (priceStr.includes('$')) {
        if (cleanStr.includes('million')) {
            let val = parseFloat(cleanStr.replace('million', '').trim());
            return val * 1000000 * 83.5;
        }
        let val = parseFloat(cleanStr);
        return val * 83.5;
    }
    
    // Check if Crore based
    if (cleanStr.includes('crore')) {
        let val = parseFloat(cleanStr.replace('crore', '').trim());
        return val * 10000000;
    }
    
    // Check if Lakh based
    if (cleanStr.includes('lakh')) {
        let val = parseFloat(cleanStr.replace('lakh', '').trim());
        return val * 100000;
    }
    
    // Numeric fallback
    let val = parseFloat(cleanStr);
    return isNaN(val) ? 0 : val;
}

// Format numeric INR to user friendly string
function formatINR(numericVal) {
    if (numericVal >= 10000000) {
        return `₹${(numericVal / 10000000).toFixed(2)} Crore`;
    } else if (numericVal >= 100000) {
        return `₹${(numericVal / 100000).toFixed(2)} Lakh`;
    }
    return `₹${numericVal.toLocaleString('en-IN')}`;
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(STATE.themeColor);
    initNavigation();
    initThemeSwitcher();
    initFilters();
    initSearchSuggestions();
    initCompareDrawer();
    initModals();
    initReviews();
    renderBrands();
    renderCarsGrid();
    renderNews();
    updateQuickStats();
});

// Nav menu handlers & smooth scrolling active states
function initNavigation() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    // Menu toggle for mobile
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-active');
            menuToggle.classList.toggle('fa-bars');
            menuToggle.classList.toggle('fa-times');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Close mobile menu
            if (navMenu) navMenu.classList.remove('mobile-active');
            if (menuToggle) {
                menuToggle.classList.add('fa-bars');
                menuToggle.classList.remove('fa-times');
            }

            if (href.startsWith('#')) {
                // For custom dynamic filters (Luxury, Sports, Electric)
                if (href === '#luxury') {
                    e.preventDefault();
                    setFilterCategory('Luxury Cars');
                    scrollToSection('cars-grid-section');
                } else if (href === '#sports') {
                    e.preventDefault();
                    setFilterCategory('Sports Car');
                    scrollToSection('cars-grid-section');
                } else if (href === '#electric') {
                    e.preventDefault();
                    setFilterCategory('Electric Cars');
                    scrollToSection('cars-grid-section');
                } else if (href === '#compare') {
                    e.preventDefault();
                    // Compare lives inside the Explorer section.
                    scrollToSection('cars-grid-section');
                    if (STATE.compareList.length >= 2) {
                        openCompareModal();
                    } else if (STATE.compareList.length === 1) {
                        updateCompareDrawer();
                        alert('Add 1 more car to launch compare.');
                    } else {
                        alert('Select 2 cars using the compare button on any vehicle card.');
                    }
                } else {
                    // Regular section scrolling
                    e.preventDefault();
                    const targetId = href.substring(1);
                    scrollToSection(targetId);
                }
            }
        });
    });

    // Tracking active scroll sections
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section, footer');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 120) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 90,
            behavior: 'smooth'
        });
    }
}

// Theme customization
function initThemeSwitcher() {
    const dots = document.querySelectorAll('.theme-dot');
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const color = dot.dataset.color;
            applyTheme(color);
        });
    });
}

function applyTheme(color) {
    if (!THEME_MAP[color]) color = 'red';
    STATE.themeColor = color;
    localStorage.setItem('autoheadz-theme', color);

    const root = document.documentElement;
    root.style.setProperty('--accent', THEME_MAP[color].hex);
    root.style.setProperty('--accent-rgb', THEME_MAP[color].rgb);
    
    // Calculate light hover
    let hoverColor = THEME_MAP[color].hex;
    if (color === 'red') hoverColor = '#ff5500';
    if (color === 'blue') hoverColor = '#33e0ff';
    if (color === 'purple') hoverColor = '#cd33ff';
    if (color === 'green') hoverColor = '#5cff3c';
    root.style.setProperty('--accent-hover', hoverColor);
    root.style.setProperty('--shadow-glow', `0 0 20px rgba(${THEME_MAP[color].rgb}, 0.25)`);

    // Update active dot indicators
    document.querySelectorAll('.theme-dot').forEach(dot => {
        dot.classList.remove('active');
        if (dot.dataset.color === color) {
            dot.classList.add('active');
        }
    });
}

// Render dynamic Brand Tag List
function renderBrands() {
    const brandsContainer = document.getElementById('brandsTags');
    if (!brandsContainer) return;

    // Get unique brand list
    const brandsSet = new Set(CARS_DATA.map(c => c.brand));
    const sortedBrands = Array.from(brandsSet).sort();

    brandsContainer.innerHTML = '';
    
    // Add "All Brands" tag
    const allTag = document.createElement('div');
    allTag.className = `brand-tag ${STATE.filters.brand === 'All' ? 'active' : ''}`;
    allTag.innerText = 'All Brands';
    allTag.addEventListener('click', () => selectBrandFilter('All'));
    brandsContainer.appendChild(allTag);

    sortedBrands.forEach(brand => {
        const tag = document.createElement('div');
        tag.className = `brand-tag ${STATE.filters.brand === brand ? 'active' : ''}`;
        tag.innerText = brand;
        tag.addEventListener('click', () => {
            // Find a car in the dataset of this brand to retrieve the official link
            const brandCar = CARS_DATA.find(c => c.brand.toLowerCase() === brand.toLowerCase() && c.link);
            if (brandCar && brandCar.link) {
                window.open(brandCar.link, '_blank');
            }
            // Proactively select the filter in explorer as well
            selectBrandFilter(brand);
        });
        brandsContainer.appendChild(tag);
    });
}

function selectBrandFilter(brand) {
    STATE.filters.brand = brand;
    
    // Update brand selector dropdown if it exists
    const select = document.getElementById('filterBrand');
    if (select) select.value = brand;

    // Update Brand Tags styling
    document.querySelectorAll('.brand-tag').forEach(tag => {
        if (tag.innerText === brand || (brand === 'All' && tag.innerText === 'All Brands')) {
            tag.classList.add('active');
        } else {
            tag.classList.remove('active');
        }
    });

    renderCarsGrid();
}

// Filters logic
function initFilters() {
    const searchInput = document.getElementById('searchInput');
    const heroSearchInput = document.getElementById('heroSearchInput');
    const searchBtn = document.getElementById('heroSearchBtn');
    const filterCategorySelect = document.getElementById('filterCategory');
    const filterBrandSelect = document.getElementById('filterBrand');
    const filterTransmissionSelect = document.getElementById('filterTransmission');
    const filterFuelSelect = document.getElementById('filterFuel');
    const priceSlider = document.getElementById('priceRange');
    const sortSelect = document.getElementById('sortBy');
    const resetBtn = document.getElementById('resetFiltersBtn');

    // Sync search bars
    if (heroSearchInput) {
        heroSearchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            STATE.filters.search = query;
            if (searchInput) searchInput.value = query;
            renderCarsGrid();
        });
    }

    if (searchBtn && heroSearchInput) {
        searchBtn.addEventListener('click', () => {
            scrollToSection('cars-grid-section');
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            STATE.filters.search = query;
            if (heroSearchInput) heroSearchInput.value = query;
            renderCarsGrid();
        });
    }

    // Populate Brand selector dropdown
    if (filterBrandSelect) {
        const brandsSet = new Set(CARS_DATA.map(c => c.brand));
        const sortedBrands = Array.from(brandsSet).sort();
        sortedBrands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.innerText = brand;
            filterBrandSelect.appendChild(option);
        });
        
        filterBrandSelect.addEventListener('change', (e) => {
            selectBrandFilter(e.target.value);
        });
    }

    // Category click handler (Category Grid)
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.dataset.category;
            setFilterCategory(cat);
            scrollToSection('cars-grid-section');
        });
    });

    if (filterCategorySelect) {
        filterCategorySelect.addEventListener('change', (e) => {
            setFilterCategory(e.target.value);
        });
    }

    if (filterTransmissionSelect) {
        filterTransmissionSelect.addEventListener('change', (e) => {
            STATE.filters.transmission = e.target.value;
            renderCarsGrid();
        });
    }

    if (filterFuelSelect) {
        filterFuelSelect.addEventListener('change', (e) => {
            STATE.filters.fuel = e.target.value;
            renderCarsGrid();
        });
    }

    // Slider range
    if (priceSlider) {
        priceSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            STATE.filters.maxPrice = val;
            document.getElementById('priceRangeVal').innerText = formatINR(val);
            renderCarsGrid();
        });
    }

    // Sort order
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            STATE.filters.sortBy = e.target.value;
            renderCarsGrid();
        });
    }

    // Reset filters
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            STATE.filters = {
                search: '',
                category: 'All',
                brand: 'All',
                transmission: 'All',
                fuel: 'All',
                minPrice: 0,
                maxPrice: 250000000,
                sortBy: 'default'
            };
            
            if (searchInput) searchInput.value = '';
            if (heroSearchInput) heroSearchInput.value = '';
            if (filterCategorySelect) filterCategorySelect.value = 'All';
            if (filterBrandSelect) filterBrandSelect.value = 'All';
            if (filterTransmissionSelect) filterTransmissionSelect.value = 'All';
            if (filterFuelSelect) filterFuelSelect.value = 'All';
            if (priceSlider) {
                priceSlider.value = 250000000;
                document.getElementById('priceRangeVal').innerText = '₹25 Crore';
            }
            if (sortSelect) sortSelect.value = 'default';

            // Reset active categories
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            selectBrandFilter('All');
            
            renderCarsGrid();
        });
    }
}

function setFilterCategory(cat) {
    STATE.filters.category = cat;
    
    // Sync dropdown
    const select = document.getElementById('filterCategory');
    if (select) select.value = cat;

    // Sync Category Cards styling
    document.querySelectorAll('.category-card').forEach(card => {
        if (card.dataset.category === cat) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    renderCarsGrid();
}

// Autocomplete suggestions
function initSearchSuggestions() {
    const heroInput = document.getElementById('heroSearchInput');
    const suggestionsBox = document.getElementById('searchSuggestions');

    if (!heroInput || !suggestionsBox) return;

    heroInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();
        if (val.length < 2) {
            suggestionsBox.style.display = 'none';
            return;
        }

        const filtered = CARS_DATA.filter(car => 
            car.name.toLowerCase().includes(val) || 
            car.brand.toLowerCase().includes(val) || 
            (car.specs.Type && car.specs.Type.toLowerCase().includes(val))
        ).slice(0, 5);

        if (filtered.length === 0) {
            suggestionsBox.style.display = 'none';
            return;
        }

        suggestionsBox.innerHTML = '';
        filtered.forEach(car => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.innerHTML = `
                <span>${car.name}</span>
                <span class="type-badge">${car.specs.Type || 'Car'}</span>
            `;
            item.addEventListener('click', () => {
                heroInput.value = car.name;
                suggestionsBox.style.display = 'none';
                STATE.filters.search = car.name;
                const gridSearch = document.getElementById('searchInput');
                if (gridSearch) gridSearch.value = car.name;
                renderCarsGrid();
                scrollToSection('cars-grid-section');
            });
            suggestionsBox.appendChild(item);
        });

        suggestionsBox.style.display = 'block';
    });

    // Close recommendations box on click outside
    document.addEventListener('click', (e) => {
        if (e.target !== heroInput && e.target !== suggestionsBox) {
            suggestionsBox.style.display = 'none';
        }
    });
}

// Render dynamic cars grid based on filters
function renderCarsGrid() {
    const grid = document.getElementById('carsGrid');
    const countDisplay = document.getElementById('carsCount');
    
    if (!grid) return;

    // Filter
    let filteredCars = CARS_DATA.filter(car => {
        // Search filter
        if (STATE.filters.search) {
            const query = STATE.filters.search.toLowerCase().trim();
            const matchesName = car.name.toLowerCase().includes(query);
            const matchesBrand = car.brand.toLowerCase().includes(query);
            const matchesType = car.specs.Type && car.specs.Type.toLowerCase().includes(query);
            const matchesEngine = car.specs.Engine && car.specs.Engine.toLowerCase().includes(query);
            
            if (!matchesName && !matchesBrand && !matchesType && !matchesEngine) {
                return false;
            }
        }

        // Category filter
        if (STATE.filters.category !== 'All') {
            const cat = STATE.filters.category.toLowerCase();
            const carType = (car.specs.Type || '').toLowerCase();
            
            // Map similar terms
            if (cat === 'luxury cars') {
                if (!carType.includes('luxury') && !carType.includes('ultra luxury') && !carType.includes('rolls royce') && !carType.includes('bentley')) {
                    return false;
                }
            } else if (cat === 'sports car') {
                if (!carType.includes('sports') && !carType.includes('supercar') && !carType.includes('hypercar') && !carType.includes('coupe') && !carType.includes('roadster') && !carType.includes('hatch')) {
                    return false;
                }
            } else if (cat === 'electric cars') {
                if (!carType.includes('electric') && !carType.includes('hybrid')) {
                    return false;
                }
            } else if (cat === 'suv') {
                if (!carType.includes('suv') && !carType.includes('crossover') && !carType.includes('off-roader')) {
                    return false;
                }
            } else {
                // Straight match
                if (!carType.includes(cat)) {
                    return false;
                }
            }
        }

        // Brand filter
        if (STATE.filters.brand !== 'All') {
            if (car.brand.toLowerCase() !== STATE.filters.brand.toLowerCase()) {
                return false;
            }
        }

        // Transmission filter
        if (STATE.filters.transmission !== 'All') {
            const trans = (car.specs.Transmission || '').toLowerCase();
            if (STATE.filters.transmission === 'automatic' && !trans.includes('automatic') && !trans.includes('dsg') && !trans.includes('pdk') && !trans.includes('clutch') && !trans.includes('single-speed') && !trans.includes('isr')) {
                return false;
            }
            if (STATE.filters.transmission === 'manual' && !trans.includes('manual')) {
                return false;
            }
        }

        // Fuel filter
        if (STATE.filters.fuel !== 'All') {
            const type = (car.specs.Type || '').toLowerCase();
            const eng = (car.specs.Engine || '').toLowerCase();
            const fuelSpec = (car.specs.Fuel || '').toLowerCase();
            
            if (STATE.filters.fuel === 'Electric') {
                if (!type.includes('electric') && !eng.includes('electric')) return false;
            }
            if (STATE.filters.fuel === 'Hybrid') {
                if (!type.includes('hybrid') && !eng.includes('hybrid')) return false;
            }
            if (STATE.filters.fuel === 'Petrol') {
                if (type.includes('electric') && !type.includes('hybrid')) return false;
                if (eng.includes('diesel')) return false;
            }
            if (STATE.filters.fuel === 'Diesel') {
                if (!eng.includes('diesel') && !fuelSpec.includes('diesel')) return false;
            }
        }

        // Price range filter
        if (car.numericPrice > STATE.filters.maxPrice) {
            return false;
        }

        return true;
    });

    // Sorting
    if (STATE.filters.sortBy === 'price-asc') {
        filteredCars.sort((a, b) => a.numericPrice - b.numericPrice);
    } else if (STATE.filters.sortBy === 'price-desc') {
        filteredCars.sort((a, b) => b.numericPrice - a.numericPrice);
    } else if (STATE.filters.sortBy === 'hp-desc') {
        filteredCars.sort((a, b) => b.numericHP - a.numericHP);
    } else if (STATE.filters.sortBy === 'speed-desc') {
        filteredCars.sort((a, b) => b.numericSpeed - a.numericSpeed);
    }

    // Display Count
    if (countDisplay) {
        countDisplay.innerText = `${filteredCars.length} Cars Matching`;
    }

    grid.innerHTML = '';

    if (filteredCars.length === 0) {
        grid.innerHTML = `
            <div class="no-cars-found">
                <i class="fa fa-car-side"></i>
                <h3>No Vehicles Match Your Criteria</h3>
                <p>Try broadening your searches or resetting the custom filters.</p>
            </div>
        `;
        return;
    }

    // Render Cards
    filteredCars.forEach(car => {
        const isAddedToCompare = STATE.compareList.some(c => c.name === car.name);
        const card = document.createElement('div');
        card.className = 'car-card glass-effect';
        
        // Pick primary details for short preview
        const firstSpecName = car.specs.Engine ? 'Engine' : (car.specs.Battery ? 'Battery' : 'PowerSource');
        const firstSpecVal = car.specs.Engine || car.specs.Battery || 'Electric';

        const secondSpecName = car.specs.Transmission ? 'Transmission' : (car.specs.Range ? 'Range' : 'Charging');
        const secondSpecVal = car.specs.Transmission || car.specs.Range || car.specs.Charging || 'N/A';

        card.innerHTML = `
            <div class="car-card-img-container">
                <img src="${car.image}" alt="${car.name}" onerror="this.src='camry.jpg'">
                <span class="car-badge">${car.specs.Type.split(' ')[0]}</span>
                <div class="car-card-actions">
                    <button class="action-circle-btn compare-btn ${isAddedToCompare ? 'compare-added' : ''}" title="Compare vehicle" data-name="${car.name}">
                        <i class="fa ${isAddedToCompare ? 'fa-check' : 'fa-right-left'}"></i>
                    </button>
                    <button class="action-circle-btn quickview-btn" title="View specs detailed" data-name="${car.name}">
                        <i class="fa fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="car-card-content">
                <div class="car-brand-name">${car.brand}</div>
                <h2 class="car-title">${car.name}</h2>
                <div class="car-mini-specs">
                    <div class="mini-spec-item">
                        <i class="fa fa-cogs"></i>
                        <span><strong>HP:</strong> ${car.specs.Horsepower || 'N/A'}</span>
                    </div>
                    <div class="mini-spec-item">
                        <i class="fa fa-tachometer-alt"></i>
                        <span><strong>Top Speed:</strong> ${car.specs["Top Speed"] || 'N/A'}</span>
                    </div>
                    <div class="mini-spec-item" style="grid-column: span 2;">
                        <i class="fa fa-microchip"></i>
                        <span><strong>${firstSpecName}:</strong> ${firstSpecVal}</span>
                    </div>
                    <div class="mini-spec-item" style="grid-column: span 2;">
                        <i class="fa fa-sliders-h"></i>
                        <span><strong>${secondSpecName}:</strong> ${secondSpecVal}</span>
                    </div>
                </div>
                <div class="car-price-box">
                    <div class="car-price">${car.specs.Price}</div>
                    <div class="card-details-btn modal-trigger-btn" data-name="${car.name}">
                        Specs <i class="fa fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        `;

        // Event hooks
        card.querySelector('.compare-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCompare(car);
        });

        card.querySelector('.quickview-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            openDetailModal(car);
        });

        card.querySelector('.modal-trigger-btn').addEventListener('click', () => {
            openDetailModal(car);
        });

        grid.appendChild(card);
    });
}

// Update stats numbers dynamically based on database
function updateQuickStats() {
    const totalCount = CARS_DATA.length;
    const electricCount = CARS_DATA.filter(c => (c.specs.Type || '').toLowerCase().includes('electric')).length;
    
    // Find highest horsepower
    const maxHP = Math.max(...CARS_DATA.map(c => c.numericHP));

    document.getElementById('statTotal').innerText = totalCount;
    document.getElementById('statElectric').innerText = electricCount;
    document.getElementById('statMaxHP').innerText = `${maxHP} HP`;
}

// Compare cars drawer control
function initCompareDrawer() {
    const startCompareBtn = document.getElementById('startCompareBtn');
    const closeCompareBtn = document.getElementById('closeCompareBtn');
    const compareModal = document.getElementById('compareModal');
    const compareModalClose = document.getElementById('compareModalClose');

    if (startCompareBtn) {
        startCompareBtn.addEventListener('click', () => {
            if (STATE.compareList.length < 2) {
                alert("Please add at least 2 cars to compare!");
                return;
            }
            openCompareModal();
        });
    }

    if (closeCompareBtn) {
        closeCompareBtn.addEventListener('click', () => {
            STATE.compareList = [];
            updateCompareDrawer();
            renderCarsGrid();
        });
    }

    if (compareModalClose) {
        compareModalClose.addEventListener('click', () => {
            compareModal.classList.remove('active');
        });
    }
}

function toggleCompare(car) {
    const index = STATE.compareList.findIndex(c => c.name === car.name);
    
    if (index > -1) {
        // Remove
        STATE.compareList.splice(index, 1);
    } else {
        // Add
        if (STATE.compareList.length >= 2) {
            alert("You can compare up to 2 cars at once!");
            return;
        }
        STATE.compareList.push(car);
    }

    updateCompareDrawer();
    renderCarsGrid();
}

function updateCompareDrawer() {
    const drawer = document.getElementById('compareDrawer');
    const slotContainer = document.getElementById('compareSlots');
    
    if (!drawer || !slotContainer) return;

    if (STATE.compareList.length === 0) {
        drawer.classList.remove('active');
        return;
    }

    drawer.classList.add('active');
    slotContainer.innerHTML = '';

    STATE.compareList.forEach(car => {
        const slot = document.createElement('div');
        slot.className = 'compare-slot';
        slot.innerHTML = `
            <img src="${car.image}" onerror="this.src='camry.jpg'">
            <span>${car.name}</span>
            <span class="compare-slot-remove" data-name="${car.name}">&times;</span>
        `;
        slot.querySelector('.compare-slot-remove').addEventListener('click', () => {
            toggleCompare(car);
        });
        slotContainer.appendChild(slot);
    });

    // Show empty slots if less than 2
    for (let i = STATE.compareList.length; i < 2; i++) {
        const emptySlot = document.createElement('div');
        emptySlot.className = 'compare-slot';
        emptySlot.style.opacity = '0.5';
        emptySlot.innerHTML = `
            <span style="font-style:italic; font-size:12px;">Slot empty</span>
        `;
        slotContainer.appendChild(emptySlot);
    }
}

// Side-by-side specs analyzer comparison grid modal
function openCompareModal() {
    const modal = document.getElementById('compareModal');
    const tableContainer = document.getElementById('compareTableBody');
    if (!modal || !tableContainer) return;

    tableContainer.innerHTML = '';
    
    // Header Row (Images & Names)
    const headerRow = document.createElement('div');
    headerRow.className = 'compare-row';
    
    let headersHTML = `<div class="compare-header-col"><h2>Specifications</h2></div>`;
    STATE.compareList.forEach(car => {
        headersHTML += `
            <div class="compare-car-card">
                <img src="${car.image}" alt="${car.name}" onerror="this.src='camry.jpg'">
                <h3>${car.name}</h3>
                <p>${car.specs.Price}</p>
            </div>
        `;
    });
    headerRow.innerHTML = headersHTML;
    tableContainer.appendChild(headerRow);

    // List of keys to compare
    const keys = ["Type", "Price", "Engine", "Battery", "Horsepower", "Top Speed", "Transmission", "Range", "Mileage", "Charging", "Fuel"];
    
    // Identify winners for highlights
    const winners = {
        "Horsepower": findBestIndex(STATE.compareList, 'numericHP', 'max'),
        "Top Speed": findBestIndex(STATE.compareList, 'numericSpeed', 'max'),
        "Price": findBestIndex(STATE.compareList, 'numericPrice', 'min')
    };

    keys.forEach(key => {
        // Check if any car has this key
        const hasKey = STATE.compareList.some(c => c.specs[key] !== undefined);
        if (!hasKey) return; // Skip if no cars have it

        const row = document.createElement('div');
        row.className = 'compare-row';
        
        let rowHTML = `<div class="compare-row-title">${key}</div>`;
        STATE.compareList.forEach((car, index) => {
            const isWinner = winners[key] === index;
            const valueStr = car.specs[key] || '-';
            rowHTML += `
                <div class="compare-value ${isWinner ? 'winner' : ''}">
                    ${isWinner ? `<i class="fa fa-trophy" style="margin-right: 5px;"></i>` : ''}
                    ${valueStr}
                </div>
            `;
        });
        
        row.innerHTML = rowHTML;
        tableContainer.appendChild(row);
    });

    modal.classList.add('active');
}

// Compare specs logic
function findBestIndex(carsArray, property, mode) {
    let bestVal = mode === 'max' ? -1 : 999999999999;
    let bestIndex = -1;

    carsArray.forEach((car, idx) => {
        const val = car[property] || 0;
        if (val === 0) return; // ignore invalid values

        if (mode === 'max') {
            if (val > bestVal) {
                bestVal = val;
                bestIndex = idx;
            }
        } else {
            if (val < bestVal) {
                bestVal = val;
                bestIndex = idx;
            }
        }
    });

    return bestIndex;
}

// Modal view detail window controls
function initModals() {
    const backdrop = document.getElementById('modalBackdrop');
    const closeBtn = document.getElementById('modalCloseBtn');
    
    if (backdrop) {
        // Close on backdrop click
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) {
                closeDetailModal();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeDetailModal);
    }

    // Modal Tabs logic
    const tabButtons = document.querySelectorAll('.modal-tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const tabId = btn.dataset.tab;
            document.querySelectorAll('.modal-tab-content').forEach(content => {
                content.classList.remove('active');
                if (content.id === `tab-${tabId}`) {
                    content.classList.add('active');
                }
            });
        });
    });

}

function openDetailModal(car) {
    STATE.activeModalCar = car;
    const backdrop = document.getElementById('modalBackdrop');
    if (!backdrop) return;

    // Inject data
    document.getElementById('modalImg').src = car.image;
    document.getElementById('modalBrand').innerText = car.brand;
    document.getElementById('modalTitle').innerText = car.name;

    // Set specs table
    const table = document.getElementById('detailedSpecsList');
    table.innerHTML = '';
    
    for (const [key, value] of Object.entries(car.specs)) {
        const row = document.createElement('div');
        row.className = 'spec-detail-row';
        row.innerHTML = `
            <strong>${key}</strong>
            <span>${value}</span>
        `;
        table.appendChild(row);
    }

    // Setup Performance gauges values
    const hpVal = car.numericHP;
    const speedVal = car.numericSpeed;
    
    document.getElementById('gaugeHP').innerText = hpVal > 0 ? `${hpVal} HP` : 'N/A';
    document.getElementById('gaugeSpeed').innerText = speedVal > 0 ? `${speedVal} km/h` : 'N/A';
    document.getElementById('gaugePrice').innerText = car.specs.Price;
    document.getElementById('gaugeType').innerText = car.specs.Type;

    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeDetailModal() {
    const backdrop = document.getElementById('modalBackdrop');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
}

// ----------------------------------------------------
// RATINGS & REVIEWS MODULE
// Saves comments and stars directly to localStorage
// ----------------------------------------------------
function initReviews() {
    const starContainer = document.getElementById('reviewStars');
    const reviewForm = document.getElementById('reviewForm');
    const selectCar = document.getElementById('reviewCarSelect');

    if (starContainer) {
        const stars = starContainer.querySelectorAll('i');
        
        stars.forEach(star => {
            // Hover effect
            star.addEventListener('mouseover', () => {
                const val = parseInt(star.dataset.rating);
                stars.forEach((s, idx) => {
                    if (idx < val) s.classList.add('hovered');
                    else s.classList.remove('hovered');
                });
            });

            star.addEventListener('mouseleave', () => {
                stars.forEach(s => s.classList.remove('hovered'));
            });

            // Click value select
            star.addEventListener('click', () => {
                const val = parseInt(star.dataset.rating);
                starContainer.dataset.value = val;
                stars.forEach((s, idx) => {
                    if (idx < val) s.classList.add('selected');
                    else s.classList.remove('selected');
                });
            });
        });
    }

    // Populate car selectors inside form
    if (selectCar) {
        CARS_DATA.forEach(car => {
            const option = document.createElement('option');
            option.value = car.name;
            option.innerText = car.name;
            selectCar.appendChild(option);
        });
    }

    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('reviewAuthor');
            const carSelected = document.getElementById('reviewCarSelect');
            const commentText = document.getElementById('reviewComment');
            const ratingVal = parseInt(starContainer.dataset.value || 0);

            if (!nameInput.value.trim() || !commentText.value.trim() || ratingVal === 0) {
                alert("Please fill in all review details and select a star rating!");
                return;
            }

            const newReview = {
                id: Date.now(),
                author: nameInput.value.trim(),
                car: carSelected.value,
                comment: commentText.value.trim(),
                rating: ratingVal,
                date: new Date().toLocaleDateString()
            };

            // Save review
            const savedReviews = JSON.parse(localStorage.getItem('autoheadz-reviews') || '[]');
            savedReviews.unshift(newReview);
            localStorage.setItem('autoheadz-reviews', JSON.stringify(savedReviews));

            // Reset inputs
            nameInput.value = '';
            commentText.value = '';
            starContainer.dataset.value = 0;
            starContainer.querySelectorAll('i').forEach(s => s.classList.remove('selected'));

            renderReviewsList();
        });
    }

    renderReviewsList();
}

function renderReviewsList() {
    const list = document.getElementById('reviewsList');
    if (!list) return;

    // Load from local storage, fallback to static defaults
    let reviews = JSON.parse(localStorage.getItem('autoheadz-reviews') || '[]');
    
    if (reviews.length === 0) {
        // Inject some realistic mock reviews on first load
        reviews = [
            {
                id: 1,
                author: "Rohan K.",
                car: "Porsche 911 Turbo S",
                comment: "Absolutely perfect daily driver supercar. PDK transmission is lightning fast, launch control is dizzying. Best handling car in the world.",
                rating: 5,
                date: "20/05/2026"
            },
            {
                id: 2,
                author: "Anil Sharma",
                car: "Toyota Land cruiser 300 (LC 300)",
                comment: "True king of off-road and premium status. The twin-turbo V6 is extremely punchy, though waiting times are crazy. Highly recommended for touring.",
                rating: 4,
                date: "14/05/2026"
            },
            {
                id: 3,
                author: "Kabir Dev",
                car: "Tesla Model S",
                comment: "Acceleration is unreal, dashboard is super clean. Autopilot works decent in city, fast charging networks make road-trips seamless.",
                rating: 5,
                date: "02/05/2026"
            }
        ];
        localStorage.setItem('autoheadz-reviews', JSON.stringify(reviews));
    }

    list.innerHTML = '';
    
    reviews.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card glass-effect';
        
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            starsHTML += `<i class="fa${i <= review.rating ? 's' : 'r'} fa-star"></i>`;
        }

        card.innerHTML = `
            <div class="review-card-header">
                <span class="reviewer-name">${review.author}</span>
                <span class="review-stars">${starsHTML}</span>
            </div>
            <div style="margin-bottom: 8px;">
                <span class="reviewer-car-tag">${review.car}</span>
                <span style="font-size:11px; color:var(--text-muted); margin-left: 10px;">${review.date}</span>
            </div>
            <p class="review-text">${review.comment}</p>
        `;
        list.appendChild(card);
    });
}

// ----------------------------------------------------
// NEWS ARTICLES GENERATOR (LIVE REDDIT FEED WITH CURATED FALLBACK)
// ----------------------------------------------------
async function renderNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;

    newsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 0; color: var(--text-muted);">
            <i class="fa fa-spinner fa-spin" style="font-size: 24px; color: var(--accent); margin-bottom: 10px;"></i>
            <p>Syncing live feeds with Reddit /r/cars...</p>
        </div>
    `;

    // High quality backup car photos for feeds
    const fallbackPhotos = [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600",
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=600",
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600",
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?q=80&w=600",
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600",
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=600"
    ];

    try {
        const res = await fetch('https://www.reddit.com/r/cars/new.json?limit=6');
        if (!res.ok) throw new Error("Reddit feed unreachable");

        const json = await res.json();
        const posts = json.data.children;

        if (!posts || posts.length === 0) throw new Error("No posts found");

        newsGrid.innerHTML = '';
        posts.forEach((post, index) => {
            const item = post.data;
            const title = item.title;
            const date = new Date(item.created_utc * 1000).toLocaleDateString();
            const source = `Reddit r/cars • u/${item.author}`;
            
            // Format selftext summary
            let summary = item.selftext ? item.selftext.trim() : "";
            if (summary.length > 140) {
                summary = summary.substring(0, 137) + "...";
            } else if (!summary) {
                summary = "Live discussion, specs analysis, news announcements, and questions from the active Reddit /r/cars community.";
            }

            // Thumbnail check
            let image = fallbackPhotos[index % fallbackPhotos.length];
            if (item.thumbnail && item.thumbnail.startsWith('http')) {
                image = item.thumbnail;
            }

            const permalink = `https://www.reddit.com${item.permalink}`;

            const card = document.createElement('article');
            card.className = 'news-card glass-effect';
            card.innerHTML = `
                <div class="news-img">
                    <img src="${image}" alt="${title}" onerror="this.src='${fallbackPhotos[index % fallbackPhotos.length]}'">
                </div>
                <div class="news-content">
                    <span class="news-meta">${source} • ${date}</span>
                    <h3 class="news-title" style="font-size: 16px; margin-bottom: 8px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.4; height: 44px;">${title}</h3>
                    <p class="news-summary" style="font-size: 13px; line-height: 1.4; height: 60px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">${summary}</p>
                    <a href="${permalink}" target="_blank" class="news-link" style="margin-top: auto;">
                        View Community Discussion <i class="fa fa-arrow-right"></i>
                    </a>
                </div>
            `;
            newsGrid.appendChild(card);
        });

    } catch (e) {
        console.warn("Falling back to static news content: ", e);
        
        // Show static backup feeds
        newsGrid.innerHTML = '';
        NEWS_DATA.forEach(item => {
            const card = document.createElement('article');
            card.className = 'news-card glass-effect';
            card.innerHTML = `
                <div class="news-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="news-content">
                    <span class="news-meta">${item.source} • ${item.date}</span>
                    <h3 class="news-title">${item.title}</h3>
                    <p class="news-summary">${item.summary}</p>
                    <a href="#" class="news-link" onclick="event.preventDefault(); alert('Redirecting to full coverage...');">
                        Read Full Article <i class="fa fa-arrow-right"></i>
                    </a>
                </div>
            `;
            newsGrid.appendChild(card);
        });
    }
}

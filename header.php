<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($pageTitle) ? $pageTitle : 'Harsh Arya | Engineering Student & Tech Enthusiast'; ?></title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="/assets/styles.css" rel="stylesheet">
</head>
<body class="font-['Poppins'] bg-gray-50">
    <header class="bg-white shadow-sm sticky top-0 z-50">
        <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="/" class="text-xl font-bold text-indigo-600">Harsh Arya</a>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/" class="text-gray-700 hover:text-indigo-600 px-3 py-2">Home</a>
                    <a href="/about.html" class="text-gray-700 hover:text-indigo-600 px-3 py-2">About</a>
                    <a href="/skills.html" class="text-gray-700 hover:text-indigo-600 px-3 py-2">Skills</a>
                    <a href="/contact.php" class="text-gray-700 hover:text-indigo-600 px-3 py-2">Contact</a>
                </div>
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" class="text-gray-700 hover:text-indigo-600">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
            <!-- Mobile menu -->
            <div id="mobile-menu" class="hidden md:hidden pb-3">
                <a href="/" class="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
                <a href="/about.html" class="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
                <a href="/skills.html" class="block px-3 py-2 text-gray-700 hover:text-indigo-600">Skills</a>
                <a href="/contact.php" class="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
        </nav>
    </header>
    <main>
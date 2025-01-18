const Telegraf = require('telegraf');

let binarySearch = `
           // C++ program to implement iterative Binary Search
#include <bits/stdc++.h>
using namespace std;

// An iterative binary search function.
int binarySearch(int arr[], int low, int high, int x)
{
    while (low <= high) {
        int mid = low + (high - low) / 2;

        // Check if x is present at mid
        if (arr[mid] == x)
            return mid;

        // If x greater, ignore left half
        if (arr[mid] < x)
            low = mid + 1;

        // If x is smaller, ignore right half
        else
            high = mid - 1;
    }

    // If we reach here, then element was not present
    return -1;
}

// Driver code
int main(void)
{
    int arr[] = { 2, 3, 4, 10, 40 };
    int x = 10;
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = binarySearch(arr, 0, n - 1, x);
    if(result == -1) cout << "Element is not present in array";
    else cout << "Element is present at index " << result;
    return 0;
}
`;

const bot = new Telegraf('7569068584:AAGeK9xtH0lOaEldhvBEFdF4qcVcwRlF6do');

bot.start((ctx) => ctx.reply('Welcome to my bot! made by @ayaan'));

bot.command('binarySearchjs', (ctx) => ctx.reply("```" + binarySearch + "```"));

bot.on('sticker', (ctx) => ctx.reply('hiiiii'));

bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.help((ctx) => ctx.reply('Send me a sticker'));

bot.launch(); // start
function show_pattern() {
    var top_position = 25,
        left_position = 25;
    var width = 500,
        height = 500;
    var color_list = ["indigo", "darkblue", "green", "blue", "darkgreen", "olive", "darkseagreen"];
    var the_body = document.getElementById("theBody");

    while (width > 480) {
        var this_div = document.createElement("img");
        this_div.src = "https://i.pinimg.com/originals/ff/8c/ea/ff8cea36b681dba27d92de084e629a79.jpg"
        this_div.classList.add("foto")
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);
        var this_text = document.createTextNode("My name is Florentina Hofbauer....")
        var this_mario = document.createElement("h1")

        this_mario.appendChild(this_text)
        this_mario.setAttribute("style", "color: pink", "display", "block")


        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }

    while (width > 460) {
        var this_div = document.createElement("img");
        this_div.src = "https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/2/swiss-alps-cow-patrick-shyu.jpg"


        this_div.classList.add("foto")
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);

       

        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }

    while (width > 450) {
        var this_div = document.createElement("img");
        this_div.src = "https://boyslifeorg.files.wordpress.com/2012/08/school-feature.jpg?w=700&h=525"


        this_div.classList.add("foto")
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);
       
        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }

    while (width > 420) {
        var this_div = document.createElement("img");
        this_div.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzs3eqjkjWoqRf0BhCFJubv6xdVZtLPndQc0OY9iohiOBV7ry6&s"

        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);

        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }

    
    while (width > 400) {
        var this_div = document.createElement("img");
        this_div.src = "https://previews.123rf.com/images/imogi/imogi1907/imogi190700042/128070107-vintage-college-elements-funny-monochrome-set-with-cute-characters-of-schoolbag-pencil-book-paper-cu.jpg"

        this_div.classList.add("foto")
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);
       


        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }




    while (width > 380) {
        var this_div = document.createElement("img");
        this_div.src = "data:image/jpeg;base64,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"


        this_div.classList.add("foto")
       
       
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);
       

        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }



    while (width > 370) {
       
       
        var this_div = document.createElement("img");
        this_div.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUSEBAVFhUVFRUXFRYVFRgWFRUWFRYXGBUVFRUYHSghGBolHhgVITEhJSorLi8uFx8zODMtNykvLi0BCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALoBDwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQQFBgcCAwj/xABIEAACAQMDAgQDBAYHBQYHAAABAgMABBEFEiEGMQcTIkEyUWEUQnGBFSMzUpGhQ2JygrGywQgkU6KzY3OSwtHwFzRFVYPS0//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDaJb6JJFiaVBI4JRCwDuF+IqpOSBkdqcZrEPF7zU1i3kiz5ot0e2I7ebFK7MHHupXg8+1SfUPX/wBrsWjEd/Z3eAy+VDIwMiH0osgxlGYY9v8A1DXM0ZrFZNY6jSDa80bFoirCSNoJlLrjIlKqFcE4DkbM45JOKhekuudcwPLlS425T7PcYWWTywGPltgM74OPiJ45HIyH0GTS1ifSfXusAztNF9qjhl2yw7fLu4QwdhtGAGA2OMHngfOrnpPibZ3NxbQoMJcxkpIWGVnU4NvIn3WxjDZwcjGc5oLzzRQKWgSjmiigOaOaKWgTmilpKAo5opKA5peaTNGaBaKM0hNApoozSE0C0YrgNXYoDFFLRQJQaWigQUUUGgQmgfjSV3Qc4pqszeeUz6fKVvzLsP8AQU8pio/3k/8Acr/nagp/iz0hLfxRzWoBuLdt6qf6RRzsByOc9uR3PviqNpHUliR5dyiQTAlZUmhztcjLeZHhWXPJ8yIqecunud3qA6r6c067jJv4o8KMeaxCMmeBiXgjk9s4oM/6v1aW2tlZIxLAATPEZTIRE42eZaXAw0eAWXDAHvlSM17aLfQbIWilVoHw1vISD5bLtJikz2dCEyO+0D4gq4irOzWxvUtXmWeF/OW2n2M1zE8JHmW8oQZONvDMCoAyMDsupdGQM++0n+yybt5QAyW7uO3mh2ADdxlRj1HigsttCiXkkxUJNMAC5Jz+rYbQ4zgmNxHk/uBP3qqvWPSEM18ksYW38xJd23coWXaWilwOxDtGjAfusR2r1k1+ezRYdXt9vtHeQnzreVk+FXxzkplOefSpI4JqxXckdzHHIrBw6khgc5IBDHcPbbJISfdpR8qB5oniDGth512rebbyRwXgUDMbMwTzyPeM8NkZ7nHar5FIrAMpBUgEEHIIPIIPuK+ceq4boMHiGFuVSymGBgyCTMbnjs5UsM8qOMgFRWteGN+BHcWO7LWM7RAE5Iib1RqT77fUmffZQXeuaWkoOqSiigKQmkJqA6g6wsLF1iubgLIy7ggR3bbz6iEU4HB5PyoJ4vVJ678RYdKkjieCSV5V3KEIAxu2gHPuT8hUV1nrGqXNqlzpSywQhHmeVxATLD5e9DHHuZ8nHAIUncO1Z4dGuL61/S9zf3ErW8gj8sWoeZCjhh6fNAAywY/Q0F0l8V9RJ/U6DckHsWEuf4LD/rXA8QOoJP2ehOv9uOb/AAYLT+86l1CFbVnuXYXahgYdPGIQSgzNvnJUAuP4GvG71DUTfyWZ1C6/VRu5aKzt0jfbEJAiSMXO45x27ig5t+oerZSNumW0Y+cuVx+XnZ/lXfSPXuovqjafqAthtDgmEMMSKgcYZm5GNw7d6aWdxfS2E955+rq0T4FuxiSSRSIyXVvs/b1t2BxsNQmu9I2otIb+e01G4nuT+sQSZdXwcGQiPO309wPlQbvFMrDKsCPmCCM/LilfB4rDbTUZNEuGgtI5YLVmjEj3Y8yIOxTEowFbbtkVWAPBA+RzPdKeIF3Jqz6feLGwLyRI0KFVDxqXDZZiWVlVvw9PzNBq6rXVFFAUUUUBRRRQFFFFAhpaSloENNUH69j/ANkv+Z6ctXlGPWT/AFVH8C1B71G9SaQl7azWznAljZM4B2k/CwB9wcH8qkqKDBtK05lke3uJHF1FG6bbiRuRwH8uTChoH+Ld7dnOMGpaziyN3mTKyY3qJEi2n90xSZhGfYmXJzxxWoa9oFrfIEuog4VgynJVkYe6OpDL+RrCvEfRf0TOfsMV1bphfKm83dB6uXVGxviI543ZODxg0FzuUEkclvdM/kTYBjlghg98jy5S2yRgeQwk4wO9U+eOTQZzESz2E7B0YlWMLA4D+gkA+raR2O5T8hT5LlYnEpfz0mQHzkTYuFyCTAnEp5ALevGMMFIwJ3bHf2n2Uva4Yt5MaKiZYAhlWSImMk+ocbSM5KgigBcpt3PGGKN5+3Gd7W7KJjjs2AqRr+Gad9LDyOor+NfguraO5Uj3wUGfrku5qldE3kk0Lwyk77aUQkkYcRFXUBh7eoAVdOksS6z5g/otKii49i05K5/urQadS1zmloCkJoJqoddeINnpICy5kmYZSFMbsdtzn7i/U8nBwDigcdS9aw6fMsdxb3Plsm83CRF4VOSNjFed3Ge3uKznr2LTNV8y+tdQ3yrFHGsCjBLyOIo2O4blG51yMe3tmmltNr/UzHD/AGSyycldyocfdyCGnb8wvHtUfo+gTWdxE93FIrTX42q6De8NkjTZ4/fbyuR3MfyzQazK32tVtdM1JYHs3VJ1WMOwVMp5bK2NvKHBHyrz+0fpg79O1GWBLeV45wsQxK42nHqwRgZGR33fSou2N3NbvPo9ilpcTXbi4a4Ub3T1MZSzDLAs/AGeM4p7FeHUbsR2lzLbjT5x9rTYFS5JPChkbt6HyD7OOKB62sjVHuLSxupraS1lVZpBGjZwXVkTfn3X4se1cya8Jnl0mC5kS9ihH6941K7gsZ38HBYhs7cD3r26ss2nkijjluY9jCaRbZVxMC3CyMWHGUORznNcdUi7uohHbLdW7eYrNIgiDMgDZT9up59POfagZXzzRpHpdxJeTSzqS19CgRYt0hwWZD+rI4A4wRj617W6gxS6XaXlylxAFJuJE3OMyLIfWVCyEhscezCvTX7K4vIoolS9gMbxv5scsCu2wEYb9ac5znkEZHavOW2uX1CBnuJ4gkRJiVi8U4BwzS7QqRuOP3vjGMYoKvqk7ahZwyK1/LHDIbeaIRhHucttErgKyug2sDtye/Yin3QGmwWN01s1nHHO0RntZmBErwyYJtyWHxxZ2NjBwAcc0/k6bks7B4YtSAujKZEuJ3VNpdhvBJ3d0BzxyeagvEPqSzWztit9HLqFo8DxtC2/fKpVJgzLxsYbsg/Ice1B3P1D1bagGbT4Jl5J8pC7Y77cRy5GOw9J/OmCeN9xAwW+0to8/Jnjb8kkTn+IraVPAzXE8CSDa6qwPcMAR/A0FA0Txh0q4IV2kgY/8VfSPxdCwA+pxV+trhJFDxurowyrKQykfMEcGqvrPhrpF0Duso42P34B5LA/P0YBP4g1n15pWp9LyfaLaRrnTyR5sZ4KgnBLKOFbtiRe/AYdqDbqKrGqdYwx2UN7CPOSeSBEAOGPnSBTxg+tQW9PzXFWegKKKKAooqB13rLTrGVYbu6SKR13BWDH05wCxAIXnPfHY/Kgna8lPrx/VB/ma7gmV1DowZWAKspBVgeQQR3FeB/bD/uz/mFA6ooooCvO4gSRSkiqysMFWAKkfIg8GvSigxPxI6CnsGW90dXWNdzTRISdhOPXHH324HIB4wuBgcPNC1i1uT5kMgZwFDTQbopDwDtmXC+aAT94Yz94djsFYz4n9C3q3S3ukQhQVxMtudsrOWJZzGTtfPHYZzyc96BlbslvrFyvBW8igmJH3ds6+cew59MxzgVK9M61DYW2oarLhkkuPKtwpx5sdv8AqoQhPzO4k/RjVI1LV5Li5UMs0dz5H2SETR+UxaaXauT7KpZvwycfWY8Y7H7PaaZp6ZYwxs7lQcbYo1DyFR2H7Rs+3NBPaD4k6rfgvZ2FrIFyWhFzi4C8YOGxx9cVc+let4L1jBIj212nx20ww4x3KEgb1+o/hWZeDWkMbzzoUAiihVJJY2d4ppDuywZwMPgqNijAAOce+heIXRQ1FFkhfybuEhoZhkHjP6tmHIXPIPsfzBBx4l9UyaZZNcRQmRywRTj0RlgcSSf1QRjHuSB71m/hz4cyag36S1ZncSnesbH1Tf1pP3Y+2FHcAdhwe18StU02QW2uWQkRuN4UBnUH1OCMxy+3A2+1ax091JZ36B7SdJBgZUHDp9HTuv5igloYlRQqKFVQAqqAAAOwAHYVSfFLQL+7S2bTn2TQzM27eEKq0bKW3fwGB+9V4BoIoMVTpXq7/wC4r2/45/8A512vTnV6/Dfr3/4qn8+Y62cClxQYwemurTkm/UHtnzR/+navN+jurH4bUl7e1w4/yx5ra8UuKDDo/C7X3OZdUUfX7RcOf8BT3/4MXsn7XWn/AAEcjj/mmFbLiloMet/AW3x+uv5Xb3KRqgP5MX/xqZ0bwa022lSYyTyNG6uodowm5GDLkIgJGQOM1pFVnrTray0pA1y53PnZGg3SPjuQOwH1JAoLLS1nnSHizY6jN5AWSFz8Hm7drn91SpPq+h71oKmg6rJPECx6jee4FuPMtH2+XGpi3KAihuGw3J3cZIOe1a0TXm5oPm/oTTrxL6zsrm3nREu/tADrIETy0LEBT6cFlUk/QV9Jq1YVeXctxbz6jcalfLG97JDaQWsqoCu4iIHPA7Yz9M814poGqDmaHWwR7x6jDJ/AbRQb3uqrdd9UyWQghtY1lu7mUJDG2duBgyO+CCFA/wAfoaytVvFyPtHUUWO5aBpV/ijjivXT9Au7r7Nf2+vEySK8VubmI+aPUUkQHLgHLYz/AFhzzQXGXr3U7Pd9v0vzU7JNYMZYy4yNjBuR6uDnBHyNVK50qa4P2eZQ2qaoyvc8A/YLFWBCc/AcBRjv7dwMudFgvNLvLa1uriJUbJW4gbywY7ZQ80NwgGJTsCjc43DfnceRU34TxPd3uoaqV2xzv5cQxjIQ9yPntEeT+8W+VBpWn2ccESQxLtSNVRB8lUYArlh+uX+wf8RTqmz/ALVf7JoHNFFFAUUUUBSGlooMQ8b5dmqaY37pQ5/CdTU51bIo6hscEmQQDYo9t8xWQkD28kzn+7n2qL/2h7c7tPlUcrJKv1JJiZR/yt/GrV0RoFybibVtTAS5lXZHFkbbaAHIUnsWOBk/j8yKC23qxBVjeQRhmAUBxGW5B2L789uOeahtT02aF99m0w34Uxx+SYk2gnfslwSx4GAwHGePd7BZWE5wjJI6Nv3LKTLnDKGMituPDMBzgZ4olju7cZQ/aEVFG12Cy5BwWDKh8w7fnjJH1oPB5LW+ElrdQoSDgwTGNnK7VPmBVJwPUBuHuO9ZZ4geG1hYqJ7e+Fq+79Wkzkhj8o3UeYh+vIHvjvWsXV9aSHZOArJtYCVdrc5wye/sRxWf+J3T8kl0ZpbOW6tZYEh/3cg3Ns6OX3RqQQQ3AP0Jz2GQXwp6v1A3TaZqQYyLGXR3x5mFwcMw4kUqch/p3OeNarIPDWU6nqk2oeQYobaBbSJSdzFh7s/uwXOf7a8/PXhQdYpaQUE0BilqH6c6ltdQRntpN2xijqwKOjAkepG5GccVM0BRXje3ccMbSyuERFLOzcBVAySaonV/WVyNIa9s7OQeZuUF8K8MTbgt1s5yPhIHtuyeBQQvXHi+0E5tNMgFxKGKs5DOu8d0jROZCOQTkdveqZ0Tq/6V11ZtUCCQRsscTIQgljG1Y9jk4IzI2D94fPFO/wDZ8NklzMZnUXRVVtw3AK8mTYfdz6eO+AcZyaXx46cNndRalb+nzXG8jjbcR+pXH9oDP4qT70Er449NpEkWpWsao8bqsxRQAQf2cjAdyGAXPf1D5VqHRuvLqFpFdKMeYpyv7rKSrD+INRXTmow6zpyvLHlZkaOZD23D0ybT8sjIP4Uw8O+g5NImn23Zkt5APLjKkMpByC3OM44yMZ+mAKC/Ma8mrs1yBQYZ01pL6noUdtayxC4hu3k8t3wThnOCBkjhwQce1Xsat1F2/RVtn977UNp/Ad6d6t4Z6VcuZDb+VIST5kDNE2TyWwp2k/UioXUfDOGGN5hqWqYjVnKpcbmIUZ2oAmSeOKD2vdU6oGDHp1njuQJtxP0yXXFOOkNMl0yzsraZolkeV2kUqz4LtvKRFQVUgHGeBWb9I9OvqcQ26leGVmm9H2n/AOXCFhGtwp9WTtBLAAeoYHfEzcaReRI7rrtwUj8xrl1nWQQBMqoK5BLEq/HHYDvyAb+KA+0/YYrfyme7ubiSLyt2CsnlxhpN3q3E53ccbSPatm6e0iOytoraL4Y0C592PdnP1JyfzrLvBfpmWU/pW8d5HYFLbzWLPs5DS5YnGeVUD23H3FbFQJTf+m/uf+anNN5P2i/gR/In/SgcUUUUBSYpaKAooqD6r6rs9MjWS8kKh2KoArMzEDJwFH8z8xQUX/aGytnbSD7l0P8Apu2PwygrQ9T+0H9nFDJHjLJIxDNgEgr6SAQwXgjnPcY5x7VWfqi9aGC4uoLPyVdDJBuiaSNiGIG8YyH75yfl2qTj1u80g3cGqQ3d9Bvib7Tt2wiIqgPpyQBngrnBxg9zkNCuL2wuDEHceYSVj2syyqxwXQPGcr8IJGR8Iz2p1ClwhIRkmj+6XkKyJxgqSqHeM85PPPOab6n9kMkIltd+7EcblEKAONxUBmBIwmSADgLn2r2t9DtlLtCXTe25vKldU3ABc7FO3OFAxjHFBJDOBnGcc47Z98VmXXHVUt3KdJ0k755ARPKp9EEY4f1jsecEjtnA5PDzxQ6huI2t9MsiRPd4XeScqhO3ORyOzEsOcKcd8iw9GdI2+mQeVF6nODLKR65W+ZPso9l9vxyaBz0toMWn20dtD8KDknu7HlnP1J/9PapekxSmgXNdCvLdVV8TL9oLB2WRowZYEkdTtZYnmRZCGHw+kkZ9s0DDrbQ5bWb9Lacv66Mf7zCPhuYvvEgd3AHfvwD3HM50tfWmoEahbu5cxCFkMhxH6t5Vos7Q+fvY5HY4NZf1XFd9P6gt3bSO9tOAoSSR3Hp7wszEnjllOcjJ+Rz6fb1tH/TOlLutpPTfWuceSx5IYD4VychscE/JsUGg+IVpJqOmypYtHKxZTgMGWTyZQZIsg4zlSMZ7jHFRWheK1hKvlXym1lA2yJIjbM4wR2yo+jAfnVX0jVU01v0jppaTTZ3Aurf+ktJTjuPY9sHOCMDONprTLjTNM1aJJnihuI2GUkIGQPluHqUj5e1BiviJ0DHGv6S0dxJaltzCFg32dgclkZfuZ/NPw7Tnh114urFdN1WBJ3wTHIyqwcxqT61PZwAfUO/P5velIINP1w2enXHm2s8TmeIEyCCRASu5u30yTn1EHsKv+kdH6fZyPLbWsaSOxYuBlhu7hCfgX+quBzQOtF0iCzhWC2j2RJnaoJOMkkkliSSST3NSQFcgV1QFU3rPxEtdPJiX9bPhvQpGEYAYEh9ic9hk/hUJ4geILpILHTcvcM/lsyDcVbB/Vx/N/mey4Pv2kvD3w6Szxc3mJbs5bJO5YS3cJn4n75f6nH1C19LX81zaQzXEJikdAXQjGD8wDyoPxAHkA4NSpFLRQVvqLoixviJJIikw+G4hJinU+x3r3/vZrP8AU+nmluRpU2tq6F4pJYJIViuZkX1KnnqB5x4J75GAa2SsE8d5hbarZXC5DLGjFh/2cxIx9e/8aDcrWFI1VEUKqgKqgYCqowAB7ACnNN7d84I96cUBTeX40/MfyNOKbz/HH/aP+R6BxRRRQFFFFAVlH+0RYlrKCdRnyp8N9FlRhk/TcqD+9Wr1F9T6HFqFrLazZCSgAlfiUghlYZ9wQD+VBmHQHinpltYW9vcPIkkSbGHlMwyCcEFc9ximHiF4t2N5aXFpbxTN5iBVkYBFyGU9uT7e4FSkfgLZc77y4Py2iNf4+k5qUtPBTSEjKOs0jEECRpCGUkYDKq4XI78g0DzqzqCVIba0tbaO4upoVlAk2mGGNAoaeQscYBOBz8+fY+/hx1LdXLXNpexxrPamLLQ/s3jmUtGwwSO2DweQRWe6z0t1BaToY0N2ohNp5itgzWzH0xzDcGjZcn1j5A545nNB6f1xYpIre1gsDPjz7mS4a5uXwCNysC3qxnHIxnjBoPXTAdQ6mmmU7orCLZuHw+YVKBfx3PP/AOCtWAqE6O6Xg0y3EEOWOd0kjfFLIe7t/oPYCpzAoOSKZarqEVtFJPM22ONSzn5AfT3P0p8arOvdQKt1DYRxCaWcFpVPwRW4yHkk498FQPc/zDLNT6g1DqCaX9GySQpaRo6QbzHJOWJDlnRsBgRgKTj+JqU6O6xGqQyaVqeRJIrRLIRtLED4XB7SqRn64x37wl1ay9M6mJEDNazf80RPqj+skfBHz/M4nPFLpaO4iGq2HLbVeQx8eZHgFZ1I++vBJ74HzWgl+m5k1G1l0bUuLq3Hlkn4nVP2VxHnuQNufn37NVA0qw1DSri6aJRJ9lKrdRYJSa3kBKyFT3QgHkZK5+Wat2gxR9QW8c3nmDUrQBTNHw2DnY7AEZVhn34O4djza+iOmLy2mnub+6WeaZY4wVXAEce7GeBknd8vbuaCk9O9NyyS29/pC4srpyl3bSMuI41dlmQhuHTh9uOQSPY8XvpLoZdOnuWinZrWcDbbMCVjb7xyT6hjjtnHcnFWu3gSNQkaqqjsqgKo/ADgV60DazsIYF2wxJGvyRFQfwUV6NXoaaX1zHEjPKyqijLMxAVQOckngUHqKzHxN8RPI3WdgS9wxCO6eoxluPLjx3lJ4+n49onqnxDub+X7HpCyEMCN6DEsvz2Z/ZoPdjg/VR3tHht4cpp/+8XO2S6bPPdYQfuoT3b5t+Q47h7eGXQa6fH59wA13IPUe4hU8+Wh+f7ze5+gq+0lLQFFFFAV8+/7SR/3u1/7hv8AqGtZ6162g0ryTcxyGOYsu+MKwQqAfUpIPIJPGfhNYp4x3ov9UgSJtyGG2VMe/ntvH8Q60H0Pp3wr/ZH+FPab2iYGPkMU4oCm1x8cf9s/9N6cim118Uf9s/8ATkoHNFFFAUUUUBRRSUBS0lIWx3oOqTFcQzK6h0YMrAFWUgqwIyCpHBH1rugWikzULpHVNpdz3FvDJmS2YLIPn8yv7wDZU/Ij8KCpdZa2+px3NlpN0UubWRTKoJjaZE+NYJFPs+Ae3K4OAcnNujetJYNU+0Xrk+cq287twVC7VVmHsVZVz27sasXiP0jJpc41PTsovmbpAORE7Hvj3jcnBHsTjsRhequlI9dtF1TT023DL+uhH9IyelwP+0GOD94Y9+aDSOsunY9StXt3wCfVG+M7JB8LfUexHuCapPgn9tRLuzukIjgkCKGB4dt/mopPDJwG/v8A1478E+rXuoWspw3m2qjaxB9UWdoVs9mU+nn2x8jV66g1u3sYjNcPtUdh3Z2x8KL7n/2aCI03SNO0KO4uA5jjkYM247tuM7YogBkjJbA5PP0rPte8YbyRythCsaryCy+bKyjuzKOFHzxn8aZRm96mvCMmO3jPPukKN7Affmb/AN8AAyXihax6VawWFjEI1uiwmlJ9cgTaNskh+6S+T7ALjGKDTvD3qM6lYxXLABzuSUL2EiHa2Bk4B4YD5MKslZb0z1RpWjWcdqlz9okG5nMK5DSMcsQxwoHsOc4Aqu9SeJeoXzpbafC0fmHGIzunfPb1gDywO5I/8WKDTetutbbTI8ufMmb4IVI3N9W/cX6n8s1kk7az1G4QDbBuzkApbR4PcnvIw+XJz8u9WLp3wgd5Fm1OQEZy0KMWLn5SS/4hf41rlvAkaqkahVUAKqgBVA7AAdhQV3orou20uPbEN8rD9ZMwG9/oP3UHso/PJ5qy0tZ34r3d0k2mxQ3ctvHcXXkymHAclygQ7vkMtx2Oee1BodFY91SdLsJTFd3urXE6xiRlWeQ+k9idm1VH/rUJ+lLObATS9WlU9t97KCeRgBd5yeRx9aDey1ebSVjOjWukzzRQvZ31rLcb/Jc3cjK/ljLAOspwcYPI9x8xWZdeJNZ3txaLczmNHG0PKzellDrnnnhqDevFvpmbUrMR24UyxyrIgJC5G1lZcngHDe/yqpaD0vr3+7GWz07/AHUIqG4UNIRH8B8yMMwIxweAPkajPCDxKMZWxvpGZWbEMztnYTgCNyfu57H2zjt23pBQFtu2jeAGwNwUkqD7gEgEjPvgV60goNAtNbzun9r/AMj06pnfnG0/Jv8AysKB5RRRQFFFFAhpM0pqp9eddW2kovmqzyyAmKNRjdtIBLORhQMj5n5A0E/qmpw20bTXEixxqMlmOB+A+Z+g5NYZ1b1xe61L9jsI5BC+VEaftJh7tKfuR/TOMfET2DK1tdU6nuN7ttiQn1EHyIB+6i59cmPz+ZAxUlqHReq6A5u7Ccyx8eYVTnaDnE0WTuT6qeO/Heg1nw+0OewsYre4lDuufh+FAxyI1J5YLzz/AKU56s6lg02Azzbj7IiDLyMAWwo+gBJJ4ABNV7oDxJt9RxFKBDc/uE5SX6xMe5/qnkfUc1A+M189re6XctzDFJIXGMj4o/MBHuTHvA/Og8D44xlFddOl2kgMzOAufvBGCkMf4VE9QXirPH1BpRyhYJeRngo+AGEijsHGAT2yFYZzWw3um211AYpI0eGRQdoA2kHkMuOx9wRWK6PA2h6ubGcb7S7xH6hlXjlJETMOxIb0N+LH5UGsaBr9lrNqwTDK6bJoX+NN4IKuPl3ww4NUzwaVrS61HTXOfKkWRPqOULfmohP51H654ZX1lN9o0aVsc4TftlTPdQzHbIn0bntnPen+lTzaNHPqGqHzL+72okWUzsiXC7igwB2LEewUdzQWHqK803RGnuhEPtN16jGh9UpTPODxGuSSW9yfc1lumaZqHUl0ZpnKwIcGTGEjU94YFPBfjk/m3sDKdLdLXOu3DXt5I3k7iHYcGXb/AEUX7qDsSO3IHOSNns7GK3jWKGNUjQYVVGFA+goIUix0azJAEUEQ9uWZif4u7Gqr1XdWmpRJHqdreWSb1eK4dU2qxHZ3UsI8g8hwB9cive6uxqNwLkjfaWshS0jJwt3drndMT/wY8HBwfhducYqauNIhZJFeaRJJAfMuI227mdGJJQkoV2qAoIOBjnPNBE6J4Sacm13llnGcrl1VCD2/ZgEj86v2m6Vb2y7beCOMe+xQufxI7/nVF0y0k0xoorZj+2hhktixeKZZO9zbkndC4RXdl5Hobjsx0agKKKKBCazjxX9d1o8fsb9GP9wocfzNaKTWZ+MUpgk0y7P7OC9TzDz6VbBJP5K38qCvda2ay69IspIj+xI7nOB5aMCx+RAK554BXdzt2l6l+igCFMnACqFwscYO0KSeEGSV5PLFhliH2TPWfTH6SmiurS7UPHE0YMbqQQzZG4YIdTlgVyPz7VG2ema/Cvk79MKklsSRkMec5KJxwefpQQc1+ovtMZZFkc3QGV3Fdkw2Eo3w7Mlse7kM5+IVVfGy3xq0pHvHCx/8AH+lXvSujL43sV3fX1o4jmErCP0szBQqjO0YCgKAO2B9TWfeLl2txq03ltuCiKNdvqyVRcgY78kigqcdr/Otn8DdfvJLuS1nnkeNLYsquS20q8YXaTyBtc8fhWddP9JajdttgtJT77mUxoOf33wP4Vtvhx4dy6fM13c3O+aRGRkT4cMysSztyxyo+Q/Gg0WkNLXL0CimeqHC5+RFO0PFMdaOIn/u/wCYUEhRRRQFFFFAhqI6j6etNQjEV3CJFDBhkkMpHurKQRnscHkVL1y1B4afYxQIsUMaxoowqIAqj8AKc4oWloMf8WPDlQrX9gm1l9c0ScAgcmaMD4WHcgd+457s9Ivm6j0yWymYfbrXbJE5/pcAhWY/M5KMfqG98VtZGe9fPt9aHQ+oYvJ4ilkjKqO3k3LbHT+627A/qLQSHh14jiwX9H6mHQQkokhUkxAH9lKo5wPZhnjjsM1Idb39lrN5p0NhMs0qXG+RkDERwAq0hZsYHwDA+ePnV16u6A0/UW8yeMrL2MsR2OQOwbghvzBpnp2haX0/DJcAFeAGkdt8r+6xp2HJ9gB9e1BYeptfg0+3a4nPA4VR8TufhRR8z/IAk8Csc6d0u56ivWuLkkQxsBIQSFC91t4j7HBGT7Zz3Ipr5l/1Le4HoiXk+8dvESM5/elP8yPYDjdtB0iGygS3gXakYwPmT7sx92JySfrQOrS1SJFjjRURAFVVGFVRwAAOwxUD1bHJOYrNGZBcbzNIpwwgiC+YiH99y6L9FLn2qyVWuqbZ2YNIWEKodkiZzBOdwE0m3DbACBlTxltwwcqEHZqGEZSMLG0RSIL8FvGMqbfH3ZBgb/cnj7lSF1qqWsfmvgPsbbuLAKobDNIuOEXEYB7kttHLDMTZT3ETtvYh/T5jrH5gcYCh54Y9vnIwxi4iCnsHVdpFOINOlmJuJnCEvtgWcBDIwO3zmRgdvo8wRRYO0MWbLMcBJdGQCRpLiViZ9xBRxtkhBAG6RD2dwq9uAqoq5AJa21RTaSRsixuPOjUny4z+shVudsTN6XTHJgc491K4WrHoerNNhZAN+3erKCEkQHaWVW9SMDgMjcqeMnvQS9FFFBw4rDPGvr2SOf7BbMhRFBuA0aSB2bkRkOCMAbScc5Pfit0cZFYFrfglfu7yC7ilkdizPIzKWZjkkgIf8aDMZtVViCtvEh9zGJEzz9JPw+VPLbWbUeqfTkkPzW4uEb8yXarFc+DusRgkRxSY/clGT+G4Coe56B1SPIazkGPpn+DLkfzoPa16o0xP/oULD+tcTMf4kmtE8Iupop7sW9vpcECMsjsyFncFRwdzdh8Ix/WFZTH0rf7tosrgke6xMw/iBW1+AnT0lvFcTTwvHIziNRIhVtigMxXIHBLAf/joNXApaKKAriXtXdcuKBIu1R/UA/Ut+A/zpUilRvUR/Ut+A/zpQSlFFFAUUUUBXLV1RQcrXVIKWgoXiHqOrWlxbXFlA09ugcSwR7tzs2Rl9oJAAwVIB5zkdqh4enrzWdRgv7+z+yQWyr5cTOHklZX3gvgDauccEZ4x71qtRnUmrGztpbgQyTeWu7y4gCxHueT2HcnnAB4NA36p6ht9PgM9y+FzhVHxSOeyIPc8fkASaxKSfUOpbvagEccfYcmKBD95v35D/E/QU1sLbUeqLwyOdsK8F8ExW6HnZGD8TnH5nk4AArfendCt7CBbe2Tai/PlmY93c+7H5/6UHPTXT8FhAILdcAcsx+KR/d3PuT/LgDipeuRXVAUhpaKCtanooX1RBtoJbYhxJE57y2zfdJ+9GfS3PHJDeTzRzRqLsK6chJ13IhJG0rKB6oGPKkH0+2QTtq0MKjr3TdxMkTeXIRgtt3I4/dlTI3j65BHsRk5CsaprM1vGpECS3AdIp5bdQRCkjgKF3cvJjadn4EjBAMB1nqV/pwt1s0PnSB5HGPN2QQYJjYd2LNIXdxgk5wcYq+2OktvV5hGPL4hiiBEUWchpADjLkEjOPSCQO5JrXUc8/wCkZXtk3zWulyNEhGd0s0vp4zz+y7e+aDw6U8WrW42x3aGGViFBUF4mJOBgjlc/IjHPc1pFYloXU+j3twj6naLa3aSK3mDckTOhyDL22tkdnH51tUcgYAqQQRkEHII+YPvQd1w65ruigastcYrz1PUYLdS080cajuZHVB/FjWc9W+MFnCpj08/aZzkKQreUp9iScF/wXOcdxQRnjh1JJHLb21rPIki7pJPKdlPqwIlbaec+o4/D51q/TVvPHawJcyF5hEglY9y+PV/Pj8qy/wAN/DmeSf8ASWrbjKX8xInwWLHkSTD2IOCqe2B2xgbHQFFFFAlFFLQIKjeof2LfgP8AOlSdeFxEH9JGQQe/4qaD3ooooCikpaAooooCik9qWgKKKKDyt7aONdsaKijOFUBRycngfWvSlooCiiigKKKKApMUtFByRUNbaGUvprwyAiWCGIJjlfLZ2JLZ5zuHt7VN0UFS6v6AstSyzr5c3tNGAHOOwcdnH48/Iis3PRPUGlEmwnaRM9oXAGO+Wgl9IJ+mfxrdaSgwS66x6rXC/Z5Qc9xZEnj5nGK8LiTrC9GD9pRSOyIlv/P0n+dfQdFB866d4J6pcvvvZ0iz3LMZ5T+IBx/zVqnRHhvZaUzSRb5JWG0ySlSVHBIQAALyPqfrV1NJQCiuqKKApDS0lAClpKWgK8yPUD9CP5iuxXLdx+B/0oP/2Q=="

        this_div.classList.add("foto")
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);
    

        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }

    while (width > 350) {
        var this_div = document.createElement("img");

        this_div.src = "https://www.askideas.com/media/22/Smiling-Face-Funny-Heart-Picture.png"

        this_div.classList.add("foto")


        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }

    while (width > 330) {
        var this_div = document.createElement("img");
        this_div.src = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"


        this_div.classList.add("foto")
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);

     


        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }

    while (width > 300) {
        var this_div = document.createElement("img");

        this_div.src = "https://www.tripsavvy.com/thmb/dOOvBbdOq7RmYq3dhJlgiLV61Fk=/3300x2095/filters:fill(auto,1)/san-diego-harbor-on-clear-day-144643060-8c3356b03fc2480dbbdf23af1fbe20b6.jpg"
        


        this_div.classList.add("foto")
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);
        


        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }


  

    while (width > 280) {
        var this_div = document.createElement("img");

        this_div.src = "https://personalizedbykate.com/wp-content/uploads/2019/04/Wood-30-e1573676603843.jpg"

        this_div.classList.add("foto")

        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);

        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }


    while (width > 260) {
        var this_div = document.createElement("img");
        this_div.src = "https://miro.medium.com/max/1024/0*4ty0Adbdg4dsVBo3.png"
        this_div.classList.add("foto")
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);
      
        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }


    while (width > 250) {
        var this_div = document.createElement("img");
        this_div.src = "https://cdn.auth0.com/blog/es6rundown/logo.png"


        this_div.classList.add("foto")

        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }
    while (width > 270) {
  
    }
    while (width > 220) {
        var this_div = document.createElement("img");
        var this_mario = document.createElement("img")
        this_div.src = "http://safebytes.com/wp-content/uploads/2016/02/computer-problems-image.jpg"
        this_mario.classList.add("foto")


        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }

    while (width > 210) {
        var this_div = document.createElement("img");
        this_div.src = "https://fwi-wp-assets-live.s3-eu-west-1.amazonaws.com/sites/1/2012/11/5240445-jim.jpg" 


        this_div.classList.add("foto")
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);
     

        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }

    while (width > 180) {
        var this_div = document.createElement("img");
        this_div.src = "https://atlantatechvillage.com/wp-content/uploads/2018/11/coding-bootcamp-atlanta.jpg"
        this_div.classList.add("foto")
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);
      

        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }

    while (width > 170) {
        var this_div = document.createElement("img");
        this_div.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECB6rl6LqNsWmWGbNg1Ro_GhgPErZcHfCkqHP5boBdAlO_65T&s"

        this_div.classList.add("foto")


        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }

    while (width > 164) {
        var this_div = document.createElement("img");
        this_div.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECB6rl6LqNsWmWGbNg1Ro_GhgPErZcHfCkqHP5boBdAlO_65T&s"

        this_div.classList.add("foto")
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);
       
        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }

    while (width > 150) {
        var this_div = document.createElement("img");
        this_div.src = "https://makeawebsitehub.com/wp-content/uploads/2016/02/learn-code-e1455713167295.jpg"
        this_div.classList.add("foto")
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);
       

        this_div.style.top = top_position + "px";
        this_div.style.borderRadius = "50%";
        this_div.style.left = left_position + "px";
        this_div.style.width = width + "px";
        this_div.style.height = height + "px";
        this_div.style.background = color_list[random_color];
        the_body.appendChild(this_div);
        this_div.appendChild(this_mario)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }

    
}
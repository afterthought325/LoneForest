var TheStory = [
    {
        "id": "00000000",
        "location": "Side of the road",
        "description": "You step out of your car unto the dark, lonely road lit only by the full moon above you. You have a flat tire.",

        "story_options": [{
                "description": "Investigate tire",
                "next_node_id": "00000001",
                "requires": "",
                "chance_of_death": "05",
                "death_description": "As you stoop down to check the tire, you see a small, bulky figure to your right. A roar erupts to your left as a mother bear mauls you to death."
            },
            {
                "description": "Get flashlight",
                "next_node_id": "00000002",
                "requires": "",
                "receives": "flashlight",
                "chance_of_death": "05",
                "death_description": "Opening the door to your car, an arrow pierces your hand, attaching it to the door. You scream out in pain as a figure slowly walks towards you. You see a beard and an axe. You plead for mercy but you get hacked to death instead."
            }

        ]
    },

    {
        "id": "00000001",
        "location": "Investigating Tire",
        "description": "It's dark, but you can feel an object lodged into the tire. You try to get a feel for it, but you can't place what it is.",
        "story_options": [{
                "description": "Wait in the car for help",
                "next_node_id": "00000003",
                "requires": "",
                "chance_of_death": "20",
                "death_description": "Just as you're getting in the door, a hand grabs your ankle and yanks. You're slammed into the ground, forcing the air out of your lungs. A dark figure stands up next to you, raises an axe, and decapitates you."
            },
            {
                "description": "Walk down the road to town",
                "next_node_id": "00000004",
                "requires": "",
                "chance_of_death": "35",
                "death_description": "You feel a sharp pain in your leg and fall to the ground. Looking down you see an arrow all the way through your knee. A dark figure approaches, pulls back a bow, and finishes you off."
            }
        ]
    },

    {
        "id": "00000002",
        "location": "Outside of car",
        "description": "You turn on the light and check your surroundings. The forest is quiet with no signs of life. You hear a scraping noise. You shine the light over the road and your car, but nothing's there.",
        "story_options": [{
                "description": "Investigate tire with light",
                "next_node_id": "00000005",
                "requires": "flashlight",
                "chance_of_death": "05",
                "death_description": "As you stoop down next to the tire, you're stabbed in the calf with a long knife. The old man crawls out, pulls out the knife, and plunges it into your chest. He chuckles with a look victory on his face. "
            },
            {
                "description": "Check under the car",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "You see an old, bearded man staring back at you. He releases an arrow into your chest. It really hurts. Then a second arrow finishes you off."
            },
            {
                "description": "Walk away from the car",
                "next_node_id": "00000004",
                "requires": "",
                "chance_of_death": "05",
                "death_description": "You hear howls coming from the woods. Four wolves stalk out from the trees towards you. You try to run, but they were faster. They took you down with teamwork which makes the dreamwork. "
            }
        ]
    },

    {
        "id": "00000003",
        "location": "Waiting in car",
        "description": "It's warmer in the car. You hear more noises coming from beneath the car. A figure appears to your left outside the window.",
        "story_options": [{
                "description": "lock the door",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "The figure bashes in the window and stabs you repeatedly. You, of course, die."
            },
            {
                "description": "Get out now",
                "next_node_id": "00000006",
                "requires": "",
                "chance_of_death": "05",
                "death_description": "As you push out the other door, your foot lands into a bear trap. The figure makes his way around the car to you, raises his axe, knights you on each should, and decapitates you."
            }
        ]
    },

    {
        "id": "00000004",
        "location": "Walking away from the car",
        "description": "As you make your way down the road, you hear a noise from the car and a figure rise from underneath the car.",
        "story_options": [{
                "description": "Say \"Lovely weather we're having.\"",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "The figure responds to your courteous gesture with an arrow through your heart. You have lost of your hearts A.K.A dead."
            },
            {
                "description": "Run deeply into the woods",
                "next_node_id": "00000006",
                "requires": "",
                "chance_of_death": "05",
                "death_description": "You immediately trip and curse your father's inheritable lack of coordination. The figure races towards you and slams an axe into a vital artery which causes your death."
            }
        ]
    },

    {
        "id": "00000005",
        "location": "Investigating tire with light",
        "description": "You shine the light on the flat tire exposing a black strip. Placing the flashlight in your mouth, you pull it out. It's a spike strip made from bones. Another noise comes from under the car.",
        "story_options": [{
                "description": "Soil self",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "After soiling yourself, the man crawls out from underneath the car and whiffs the air. His face turns from disgust to rage as he slams the axe down on your neck."
            },
            {
                "description": "Run deeply into the woods",
                "next_node_id": "00000006",
                "requires": "",
                "chance_of_death": "05",
                "death_description": "You immediately trip and curse your father's inheritable lack of coordination. The figure races towards you and slams an axe into a vital artery which causes your death."
            }
        ]
    },
    {
        "id": "00000006",
        "location": "Running deeply into the forest",
        "description": "You run and run deeper into the woods. You hit branches, trip on roots, but you keep running until your breath is heavy and you wish you had never quit cross country back in highschool. You trip on a rock and slam your head on another one, blacking out... You come to with light breaking through the trees. You look around, but there's nothing but trees. You're alone.",
        "story_options": [{
            "description": "Look Around",
            "next_node_id": "00000007",
            "requires": "",
            "chance_of_death": "0",
            "death_description": ""
        }]
    },
    {
        "id": "00000007",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000008",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold, forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000013",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too. ;)"
            },
            {
                "description": "Go south",
                "next_node_id": "00000010",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000021",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You walk into a spider web. As you fumble to swipe the web off, the black widow had already bitten you. Only 5% of black widow bites are fatal; however, your deadly allergic to the venom. Your throat closes up and you die."
            }
        ]
    },
    {
        "id": "00000008",
        "location": "Pond",
        "description": "You come across a pond.",
        "story_options": [{
                "description": "Go north",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "You fall into a pit full of spikes.  Yes, the cliche pit of spikes. And yes, you die falling into the pit of cliche spikes."
            },
            {
                "description": "Go east",
                "next_node_id": "00000014",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "next_node_id": "00000007",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000025",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You walk into a spider web. As you fumble to swipe the web off, the black widow calmly sunk its fangs into your neck. Only 5% of black widow bites are fatal; however, your deadly allergic to the venom. Your throat closes up and you die. The black widow struts away to \"Black Widow Baby\" to commemorate destroying the destroyer of her website."
            }
        ]
    },
    {
        "id": "00000009",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000031",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold, forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000016",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "You fall into a pit full of spikes.  Yes, the cliche pit of spikes. And yes, you died falling into the pit of cliche spikes."
            },
            {
                "description": "Go west",
                "next_node_id": "00000027",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You walk into a spider web. As you fumble to swipe the web off, the black widow had already bitten you. Only 5% of black widow bites are fatal; however, your deadly allergic to the venom. Your throat closes up and you die."
            }
        ]
    },
    {
        "id": "00000010",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000007",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold, forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000018",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "next_node_id": "00000011",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000022",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You see an irrestibly, shining object in a bottle lodged in the ground. You reach in and grab it, what joy!...but you can't pull your fist out. You're not going to leave without it, so you die of dehydration."
            }
        ]
    },
    {
        "id": "00000011",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000010",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000019",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "next_node_id": "00000012",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000023",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You walk into a spider web. As you fumble to swipe the web off, the black widow had already bitten you. Only 5% of black widow bites are fatal; however, your deadly allergic to the venom. Your throat closes up and you die."
            }
        ]
    },
    {
        "id": "00000012",
        "location": "Your car",
        "description": "Your car is still there by the side of the rode with a flat tire.",
        "story_options": [{
                "description": "Go back into the woods",
                "next_node_id": "00000011",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Get in the car and drive away with a flat tire to safety",
                "chance_of_death": "100",
                "death_description": "You crank the car and go. Your steering is off, but you find if you go slow enough you can keep on the road. Your eyes start feeling heavy... The road ahead of you starts moving... You start to wonder what you were trying to do again...Passing out, your car rolls into a tree. The carbon monoxide poisoning finishes you off."
            }
        ]
    },
    {
        "id": "00000013",
        "location": "By the river",
        "description": "There's a river east, but besides that, it's just typical woods.",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000014",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Go east into the river",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "100",
                "death_description": "You start crossing the freezing river, but you're adamant and keep crossing. An electrical current is sent into the water current. You die, shockingly."
            },
            {
                "description": "Go south",
                "next_node_id": "00000018",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000007",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You walk into a spider web. As you fumble to swipe the web off, the black widow had already bitten you. Only 5% of black widow bites are fatal; however, your deadly allergic to the venom. Your throat closes up and you die."
            }
        ]
    },
    {
        "id": "00000014",
        "location": "By the river",
        "description": "There's a river east, but besides that, it's just typical woods.",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000015",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Go east into the river",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "100",
                "death_description": "You start crossing the freezing river, but you're adament and keep crossing. An electrical current is sent into the water current. You die, shockingly."
            },
            {
                "description": "Go south",
                "next_node_id": "00000013",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000008",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You hear banjo music and then an arrow shoots into your eye. Bullseye!"
            }
        ]
    },
    {
        "id": "00000015",
        "location": "Cave",
        "description": "You come across a cave. It's dark, and you hear a scream from inside.",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000016",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold, forest floor. Boo hoo."
            },
            {
                "description": "Go south",
                "next_node_id": "00000014",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "You fall into a pit full of spikes.  Yes, the cliche pit of spikes. And yes, you die falling into the pit of cliche spikes."
            },
            {
                "description": "Enter the cave",
                "requires": "",
                "not_requires": "flashlight",
                "chance_of_death": "100",
                "death_description": "You enter the dark, dark cave, and just like any other idiot in a scary movie who investigates a scream in a sketch place, you're murdered in the dark."
            },
            {
                "description": "Enter the cave",
                "next_node_id": "00000036",
                "requires": "flashlight",
                "not_requires": "heartpiece1",
                "chance_of_death": "0",
                "death_description": ""
            }
        ]
    },
    {
        "id": "00000016",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000017",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000033",
                "requires": "",
                "not_requires": "masterword",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go east",
                "next_node_id": "00000059",
                "requires": "masterword",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "next_node_id": "00000015",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000009",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You walk into a spider web. As you fumble to swipe the web off, the black widow had already bitten you. Only 5% of black widow bites are fatal; however, your deadly allergic to the venom. Your throat closes up and you die."
            }
        ]
    },
    {
        "id": "00000017",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000031",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "100",
                "death_description": "Your foot lands in a bear trap causing excruciating, unbearable pain. You try to saw your leg off cause you saw it in a movie once, but you realize you don't have saw. You wait until a bear comes by and instead of saying \"Thanks for taking one for the team, bro\", it eats you."
            },
            {
                "description": "Go south",
                "next_node_id": "00000015",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000031",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You walk into a spider web. As you fumble to swipe the web off, the black widow had already bitten you. Only 5% of black widow bites are fatal; however, your deadly allergic to the venom. Your throat closes up and you die."
            }
        ]
    },
    {
        "id": "00000018",
        "location": "By the river",
        "description": "There's a river east, but besides that, it's just typical woods.",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000013",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Go east into the river",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "100",
                "death_description": "You start crossing the freezing river, but you're adament and keep crossing. An electrical current is sent into the water current. You die, shockingly."
            },
            {
                "description": "Go south",
                "next_node_id": "00000019",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000010",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You walk into a spider web. As you fumble to swipe the web off, the black widow had already bitten you. Only 5% of black widow bites are fatal; however, your deadly allergic to the venom. Your throat closes up and you die."
            },
            {
                "description": "Wait! There's a backpack! Investigate?",
                "next_node_id": "00000034",
                "requires": "",
                "not_requires": "flaregun",
                "receives": "flaregun",
                "chance_of_death": "02",
                "death_description": "Inside the bag is a flaregun which you accidentally look down the barrel while you accidentally pull the trigger while you accidentally die."
            }
        ]
    },
    {
        "id": "00000019",
        "location": "By the river",
        "description": "There's a river east, but besides that, it's just typical woods.",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000018",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Go east into the river",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "100",
                "death_description": "You start crossing the freezing river, but you're adament and keep crossing. An electrical current is sent into the water current. You die, shockingly."
            },
            {
                "description": "Go south",
                "next_node_id": "00000020",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000011",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You walk into a spider web. As you fumble to swipe the web off, the black widow had already bitten you. Only 5% of black widow bites are fatal; however, your deadly allergic to the venom. Your throat closes up and you die."
            }
        ]
    },
    {
        "id": "00000020",
        "location": "By the road",
        "description": "You come across an empty road, you remember driving here through here right before your tire blew.",
        "story_options": [{
                "description": "Go back into the woods",
                "next_node_id": "00000019",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Head towards your car",
                "next_node_id": "00000012",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "A tomahawk hits you in the back and instantly kills you somehow."
            }
        ]
    },
    {
        "id": "00000021",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000025",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000007",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "next_node_id": "00000022",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You fall into a pit full of spikes.  Yes, the cliche pit of spikes. And yes, you die falling into the pit of cliche spikes."

            },
            {
                "description": "Go west",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "Your foot lands in a bear trap causing excruciating, unbearable pain. You try to saw your leg off cause you saw it in a movie once, but you realize you don't have saw. You wait until a bear comes by and instead of saying \"Thanks for taking one for the team, bro\", it eats you."
            },
            {
                "description": "You see an object in the ground reflect light. Investigate?",
                "next_node_id": "00000035",
                "requires": "",
                "not_requires": "knife",
                "receives": "knife",
                "chance_of_death": "05",
                "death_description": "As you approach the object, you see it's a knife with the blade up. You get excited to get ahold of a weapon and run towards it. You trip and would've caught yourself except you were running like a ninja with your arms out behind you. The knife may or may not have cut your esophogus, and you may or may not have suffocated."
            }
        ]
    },
    {
        "id": "00000022",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000021",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold, forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000010",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "next_node_id": "00000023",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000030",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "Your foot lands in a bear trap causing excruciating, unbearable pain. You try to saw your leg off cause you saw it in a movie once, but you realize you don't have saw. You wait until a bear comes by and instead of saying \"Thanks for taking one for the team, bro\", it eats you."
            }
        ]
    },
    {
        "id": "00000023",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000022",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000011",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "next_node_id": "00000024",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You fall into a pit full of spikes.  Yes, the cliche pit of spikes. And yes, you die falling into the pit of cliche spikes."

            },
            {
                "description": "Go west",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "Your foot lands in a bear trap causing excruciating, unbearable pain. You try to saw your leg off cause you saw it in a movie once, but you realize you don't have saw. You wait until a bear comes by and instead of saying \"Thanks for taking one for the team, bro\", it eats you."
            }
        ]
    },
    {
        "id": "00000024",
        "location": "By the road",
        "description": "You come across an empty road, you're pretty sure it's the same road you were driving on earlier.",
        "story_options": [{
                "description": "Go back into the woods",
                "next_node_id": "00000023",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Head towards your car",
                "next_node_id": "00000012",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "A tomahawk hits you in the back and instantly kills you somehow."
            }
        ]
    },
    {
        "id": "00000025",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000026",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000008",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "next_node_id": "00000021",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000028",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You walk into a spider web. As you fumble to swipe the web off, the black widow had already bitten you. Only 5% of black widow bites are fatal; however, your deadly allergic to the venom. Your throat closes up and you die."
            }
        ]
    },
    {
        "id": "00000026",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000027",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "100",
                "death_description": "You fall into a pit full of spikes.  Yes, the cliche pit of spikes. And yes, you die falling into the pit of cliche spikes."
            },
            {
                "description": "Go south",
                "next_node_id": "00000025",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000029",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You walk into a spider web. As you fumble to swipe the web off, the black widow had already bitten you. Only 5% of black widow bites are fatal; however, your deadly allergic to the venom. Your throat closes up and you die."
            }
        ]
    },
    {
        "id": "00000027",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000031",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold, forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000009",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "next_node_id": "00000026",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000030",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You walk into a spider web. As you fumble to swipe the web off, the black widow had already bitten you. Only 5% of black widow bites are fatal; however, your deadly allergic to the venom. Your throat closes up and you die."
            }
        ]
    },
    {
        "id": "00000028",
        "location": "Log Cabin",
        "description": "There's a log cabin all by its lonesome. There are no roads or trails leading towards it either.",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000029",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold, forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000025",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "Your foot lands in a bear trap causing excruciating, unbearable pain. You try to saw your leg off cause you saw it in a movie once, but you realize you don't have saw. You wait until a bear comes by and instead of saying \"Thanks for taking one for the team, bro\", it eats you."
            },
            {
                "description": "Enter Log Cabin",
                "next_node_id": "00000038",
                "requires": "",
                "not_requires": "rustyspoon",
                "chance_of_death": "02",
                "death_description": "As you step into the front door, cinderblocks fall on your head turning you into a vegetable. Turn up!!"
            },
            {
                "description": "Enter Log Cabin",
                "next_node_id": "00000043",
                "requires": "rustyspoon",
                "chance_of_death": "02",
                "death_description": "As you step into the front door, cinderblocks fall on your head turning you into a vegetable. Turn up!!"
            }
        ]
    },
    {
        "id": "00000029",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000030",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000026",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "next_node_id": "00000028",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "Your foot lands in a bear trap causing excruciating, unbearable pain. You try to saw your leg off cause you saw it in a movie once, but you realize you don't have saw. You wait until a bear comes by and instead of saying \"Thanks for taking one for the team, bro\", it eats you."
            }
        ]
    },
    {
        "id": "00000030",
        "location": "Lone forest",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000031",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000027",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "next_node_id": "00000029",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "Your foot lands in a bear trap causing excruciating, unbearable pain. You try to saw your leg off cause you saw it in a movie once, but you realize you don't have saw. You wait until a bear comes by and instead of saying \"Thanks for taking one for the team, bro\", it eats you."
            }
        ]
    },

    {
        "id": "00000031",
        "location": "Town",
        "description": "You run into the town. Smeared in dirt and covered in bruises, you grab a startled townsfolk, yelling at them to call the police. In hindsight, they probably would've called the police anyway. They come and pick you up, hear your story, and give you a place to stay for the night. Congratulations, you didn't die.",
        "story_options": [{
            "description": "Sleep for the night",
            "next_node_id": "00000060",
            "requires": "",
            "chance_of_death": "00",
            "death_description": ""

        }]
    },
    {
        "id": "00000032",
        "location": "Unused",
        "description": "There's nothing here but trees...",
        "story_options": [{
                "description": "Go north",
                "next_node_id": "00000031",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold, forest floor. Boo hoo."
            },
            {
                "description": "Go east",
                "next_node_id": "00000009",
                "requires": "",
                "not_requires": "",
                "chance_of_death": "02",
                "death_description": "A meteorite fragment collides with your head, ending it's billion year journey. It ends your journey too."
            },
            {
                "description": "Go south",
                "next_node_id": "00000026",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You take another step and fall through the leaves. You land in a warm pit of snakes. Yes. It's a legitimate pit of snakes. No, you do not live."
            },
            {
                "description": "Go west",
                "next_node_id": "00000030",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You walk into a spider web. As you fumble to swipe the web off, the black widow had already bitten you. Only 5% of black widow bites are fatal; however, your deadly allergic to the venom. Your throat closes up and you die."
            }
        ]
    },

    {
        "id": "00000033",
        "location": "Opening in woods",
        "description": "There's a clearing ahead of you, you see an elegant sword buried into the earth.",
        "story_options": [{
                "description": "Go back",
                "next_node_id": "00000016",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
            },
            {
                "description": "Pick up the sword",
                "requires": "",
                "not_requires": "heartpiece1",
                "chance_of_death": "100",
                "death_description": "You tug at the sword, but you feel the life drain out of you as you do. It decreases all of your heart containers until you die."
            },
            {
                "description": "Pick up the sword",
                "next_node_id": "00000056",
                "requires": "heartpiece1",
                "not_requires": "",
                "chance_of_death": "00",
                "death_description": "You tug at the sword, but you feel the life drain out of you as you do. It decreases all of your heart containers until your die."
            }
        ]
    },
    {
        "id": "00000034",
        "location": "Searching bag",
        "description": "You find a flaregun inside the bag. This could be useful for breakdancing later.",
        "story_options": [{
            "description": "Go back",
            "next_node_id": "00000018",
            "requires": "",

            "chance_of_death": "0",
            "death_description": ""
        }]
    },
    {
        "id": "00000035",
        "location": "Investigating shiny object",
        "description": "You see a knife sticking blade up from the ground. You pick it up, stashing it in your infinite inventory.",
        "story_options": [{
            "description": "Go back",
            "next_node_id": "00000021",
            "requires": "",

            "chance_of_death": "0",
            "death_description": ""
        }]
    },
    {
        "id": "00000036",
        "location": "Inside cave",
        "description": "The screams get louder until your light shines on a short, oddly hatted fellow. You follow his terrified eyes to see a spiked turtle standing awfully still.",
        "story_options": [{
                "description": "Moonwalk out of the cave",
                "next_node_id": "00000015",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
            },
            {
                "description": "Punt the turtle",
                "next_node_id": "00000037",
                "requires": "",
                "receives": "heartpiece1",
                "chance_of_death": "02",
                "death_description": "Right before you punt the turtle, a figure Charlie Brown's ya' and you fall unto the ground. You die of shame and an axe to your throat."
            }
        ]
    },
    {
        "id": "00000037",
        "location": "By oddly hatted fellow",
        "description": "As the turtle flew throught the air, you realize it was paper mache (#noanimalcruelity).  The fellow looks at you and says\"THANK YOU! BUT OUR PRINCESS IS IN ANOTHER CASTLE! HERE'S A HEART IN A JAR AS A CONSOLATION!\"",
        "story_options": [{
            "description": "Moonwalk out of the cave",
            "next_node_id": "00000015",
            "requires": "",
            "chance_of_death": "02",
            "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
        }]
    },
    {
        "id": "00000038",
        "location": "Inside Cabin",
        "description": "Mounted animals encompass every wall with pelts lining the floor and covering the single chair in the room. Something smells...good",
        "story_options": [{
                "description": "Enter next room",
                "next_node_id": "00000039",
                "requires": "",
                "chance_of_death": "00",
                "death_description": ""
            },
            {
                "description": "Go up the stairs",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "One of the doors at the top of the stairs opens. The old, bearded man sees you and pounces, sending you both pummeling down the stairs. He continues to strangle you to death."
            },
            {
                "description": "Leave",
                "next_node_id": "00000028",
                "requires": "",
                "chance_of_death": "00",
                "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
            }
        ]
    },
    {
        "id": "00000039",
        "location": "Kitchen",
        "description": "You see a pot boiling over a chimney fire and an elegantly carved wooden table fitted with a bowl and spoon. A door opens and shuts from upstairs. You see a pantry and a door.",
        "story_options": [{
                "description": "Hide in the pantry",
                "next_node_id": "00000040",
                "requires": "",
                "receives": "rustyspoon",
                "chance_of_death": "00",
                "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
            },
            {
                "description": "Hide in the next room",
                "next_node_id": "00000040",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "You try the door but it's locked. You race towards the pantry, but you hear the door open. You turn your head to see the old, bearded man lunge towards you, axing you to death."
            },
            {
                "description": "Grab some food and enjoy your last meal",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "You really tried to enjoy it, but it burnt your poor little tongue. The old man entered and chopped you into tiny, bite-sized pieces."
            }
        ]
    },
    {
        "id": "00000040",
        "location": "Inside pantry",
        "description": "You run into the pantry, grabbing a rusty spoon on the way so you could possibly give him tetanus or something in a fight. The old man enters, pours himself a bowl, and thoroughly enjoys his meal. When he finishes, he gets up and unlocks the other door, revealing a cellar, and enters.",
        "story_options": [{
            "description": "Leave the pantry",
            "next_node_id": "00000041",
            "requires": "",

            "chance_of_death": "00",
            "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
        }]
    },
    {
        "id": "00000041",
        "location": "Kitchen",
        "description": "An empty room with an empty bowl in front of an empty chair.",
        "story_options": [{
                "description": "Enter Cellar",
                "next_node_id": "00000048",
                "requires": "flashlight",
                "chance_of_death": "00",
                "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
            },
            {
                "description": "Go back to the first room.",
                "next_node_id": "00000043",
                "requires": "",
                "chance_of_death": "00",
                "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
            }
        ]
    },
    {
        "id": "00000042",
        "location": "Inside Cellar Unused",
        "description": "Mounted animals encompass every wall with pelts lining the floor and covering the single chair in the room. Something smells...good",
        "story_options": [{
                "description": "Leave",
                "next_node_id": "00000022",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
            },
            {
                "description": "Enter next room",
                "next_node_id": "00000039",
                "requires": "",
                "chance_of_death": "00",
                "death_description": ""
            },
            {
                "description": "Go up the stairs",
                "requires": "",
                "chance_of_death": "100",
                "death_description": "One of the doors at the top of the stairs opens. The old, bearded man sees you and pounces, sending you both pummeling down the stairs. He continues to strangle you to death."
            }
        ]
    },
    {
        "id": "00000043",
        "location": "Inside Cabin",
        "description": "Mounted animals encompass every wall with pelts lining the floor and covering the single chair in the room.",
        "story_options": [{
                "description": "Enter kitchen",
                "next_node_id": "00000041",
                "requires": "",
                "chance_of_death": "00",
                "death_description": ""
            },
            {
                "description": "Go upstairs",
                "next_node_id": "00000044",
                "requires": "",
                "chance_of_death": "02",
                "death_description": "You trip going up the stairs and break your hip. You curse yourself for not getting life alert. Hours later, the old man slams the axe down on top of you."
            },
            {
                "description": "Leave",
                "next_node_id": "00000028",
                "requires": "",
                "chance_of_death": "00",
                "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
            }
        ]
    },
    {
        "id": "00000044",
        "location": "Upstairs",
        "description": "There's a door straight ahead",
        "story_options": [{
                "description": "Enter room",
                "next_node_id": "00000045",
                "requires": "",
                "chance_of_death": "00",
                "death_description": ""
            },
            {
                "description": "Go back downstairs",
                "next_node_id": "00000043",
                "requires": "",
                "chance_of_death": "00",
                "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
            }
        ]
    },
    {
        "id": "00000045",
        "location": "Bedroom",
        "description": "There's a bed littered with animal skins but besides that, it's bare.",
        "story_options": [{
                "description": "Check under the bed",
                "next_node_id": "00000046",
                "requires": "",
                "not_requires": "heartpiece2",
                "chance_of_death": "02",
                "death_description": "The boogie man jumps out and eats ya."
            },
            {
                "description": "Go back downstairs",
                "next_node_id": "00000043",
                "requires": "",
                "chance_of_death": "00",
                "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
            }
        ]
    },
    {
        "id": "00000046",
        "location": "By the bed",
        "description": "You pull out a wooden chest that's sealed shut.",
        "story_options": [{
                "description": "Pry open with a knife",
                "next_node_id": "00000047",
                "requires": "knife",
                "receives": "heartpiece2",
                "chance_of_death": "00",
                "death_description": ""
            },
            {
                "description": "Put chest back under the bed.",
                "next_node_id": "00000045",
                "requires": "",
                "chance_of_death": "00",
                "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
            }
        ]
    },
    {
        "id": "00000047",
        "location": "By the chest",
        "description": "You manage to open the chest to find a jar containing a heart...gross... you pocket it anyways.",
        "story_options": [{
            "description": "Put chest back under the bed.",
            "next_node_id": "00000045",
            "requires": "",

            "chance_of_death": "00",
            "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
        }]
    },
    {
        "id": "00000048",
        "location": "Cellar Hallway",
        "description": "It's a long, dark hallway. The old man is no where in sight.",
        "story_options": [{
                "description": "Go farther in",
                "next_node_id": "00000049",
                "chance_of_death": "00",
                "death_description": ""
            },
            {
                "description": "Go further in",
                "next_node_id": "00000049",
                "chance_of_death": "100",
                "death_description": "The grammar police burst in yelling something like \"Further\" is for metaphorical distance and \"farther\" is for physical distance. They kill you on the spot."
            },
            {
                "description": "Go back upstairs",
                "next_node_id": "00000041",
                "requires": "",
                "chance_of_death": "00",
                "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
            }
        ]
    },
    {
        "id": "00000049",
        "location": "Cellar Hallway",
        "description": "You come across a door to your right",
        "story_options": [{
                "description": "Enter in",
                "next_node_id": "00000049",
                "not_requires": "flaregun",
                "chance_of_death": "100",
                "death_description": "A wolf greets you on the other side and lunges on you, digging deeply into your throat. He then proceeds to wolf down his dinner. If only you had had a gun or something."
            },
            {
                "description": "Enter in",
                "next_node_id": "00000050",
                "requires": "flaregun",
                "not_requires": "heartpiece3",
                "chance_of_death": "00",
                "death_description": ""
            },
            {
                "description": "Enter in",
                "next_node_id": "00000054",
                "requires": "heartpiece3",
                "chance_of_death": "00",
                "death_description": ""
            },
            {
                "description": "Continue down the hallway",
                "next_node_id": "00000051",
                "chance_of_death": "00",
                "death_description": "The grammar police burst in yelling something like \"Further\" is for metaphorical distance and \"farther\" is for physical distance. They kill you on the spot."
            },
            {
                "description": "Go back towards the kitchen",
                "next_node_id": "00000048",
                "requires": "",
                "chance_of_death": "00",
                "death_description": "As you moonwalk away, you bump into a warm wall...and by a warm wall I mean a human being with the intent to murder you...and by the intent to murder you I mean he murders you."
            }
        ]
    },
    {
        "id": "00000050",
        "location": "Wolf room",
        "description": "You shine your light on a wolf in the middle of the room. Growling it charges towards you, but you pistol-whip your flaregun and shoot it. As it smolders and dies, it fades out, and a chest fades in.",
        "story_options": [{
            "description": "Open chest",
            "receives": "heartpiece3",
            "next_node_id": "00000053",
            "chance_of_death": "00",
            "death_description": "A wolf greets you on the other side and lunges on you, digging deeply into your throat. He then proceeds to wolf down his dinner."
        }]
    },
    {
        "id": "00000051",
        "location": "Cellar Hallway",
        "description": "You reach the end of the hallway. There's a door with light shining near the bottom. You can hear people from the other side.",
        "story_options": [{
                "description": "Go back",
                "next_node_id": "00000049",
                "chance_of_death": "00",
                "death_description": "A wolf greets you on the other side and lunges on you, digging deeply into your throat. He then proceeds to wolf down his dinner."
            },
            {
                "description": "Enter in",
                "next_node_id": "00000052",
                "chance_of_death": "00",
                "death_description": ""
            }
        ]
    },
    {
        "id": "00000052",
        "location": "Arena",
        "description": "You enter in to see a small arena seated with various townsfolks. Across from you is the old man with a crown on his head and an axe in his hands. What weapon do you choose?",
        "story_options": [{
                "description": "Flashlight",
                "requires": "flashlight",
                "chance_of_death": "100",
                "death_description": "The flashlight was actually a gun. While inspecting its batteries you shoot yourself in the face as the crowd looks on in confusion."
            },
            {
                "description": "Flaregun",
                "requires": "flaregun",
                "chance_of_death": "100",
                "death_description": "You shoot the flaregun at the old man, which illuminates his charge as he rolls and removes your head with his axe."
            },
            {
                "description": "Knife",
                "requires": "knife",
                "chance_of_death": "100",
                "death_description": "The knife looks really small in comparison to his axe. You throw the knife at him and he catches it by the handle. He throws it back into your heart, and you die."
            },
            {
                "description": "Rusty Spoon",
                "requires": "rustyspoon",
                "chance_of_death": "100",
                "death_description": "Though it looks humble, you sense something ancient about this spoon. As the old man swings his axe at you, you close your eyes and hold the spoon up. You block his axe, and gain confidence. The old man is on the defensive. You look at your hand and see that it is bleeding from the spoon, you have tetanous. The old man laughs at you and leaves you to slowly die."
            },
            {
                "description": "Heart container 1",
                "requires": "heartpiece1",
                "chance_of_death": "100",
                "death_description": "You try to pull the lid off the jar, but you can't. Maybe if you had a butter knife or could run some hot water over it... The old man chopped your head off while you were thinking. The crowd cheers your death."
            },
            {
                "description": "Heart container 2",
                "requires": "heartpiece2",
                "chance_of_death": "100",
                "death_description": "You try to pull the lid off the jar, but you can't. Maybe if you had a butter knife or could run some hot water over it... The old man chopped your head off while you were thinking. The crowd cheers your death."
            },
            {
                "description": "Heart container 3",
                "requires": "heartpiece3",
                "chance_of_death": "100",
                "death_description": "You try to pull the lid off the jar, but you can't. Maybe if you had a butter knife or could run some hot water over it... The old man chopped your head off while you were thinking. The crowd cheers your death."
            },
            {
                "description": "Mastersword",
                "next_node_id": "00000055",
                "requires": "mastersword",
                "chance_of_death": "0",
                "death_description": ""
            }
        ]
    },
    {
        "id": "00000053",
        "location": "By chest",
        "description": "You open the chest to see a mason jar containing a heart. You can't help but give a hearty laugh and take it.",
        "story_options": [{
            "description": "Leave the room",
            "next_node_id": "00000049",

            "chance_of_death": "00",
            "death_description": "A wolf greets you on the other side and lunges on you, digging deeply into your throat. He then proceeds to wolf down his dinner."
        }]
    },
    {
        "id": "00000054",
        "location": "Wolf room",
        "description": "Just an empty room with an opened chest. Smells like burnt fur...",
        "story_options": [{
            "description": "Leave the room",
            "next_node_id": "00000049",
            "chance_of_death": "00",
            "death_description": "A wolf greets you on the other side and pounces on you, digging deeply into your throat. He then proceeds to wolf down his dinner."
        }]
    },
    {
        "id": "00000055",
        "location": "Arena",
        "description": "The old man lunges at you, swinging the axe down from above. You barrel roll to the left and stab him through with the sword. The crowd gets up and merges towards you. Taking the crown from the old man's head, they place it on yours. Congratulations King.",
        "story_options": [{
            "description": "Play again?",
            "next_node_id": "00000000",
            "chance_of_death": "00",
            "death_description": "A wolf greets you on the other side and pounces on you, digging deeply into your throat. He then proceeds to wolf down his dinner."
        }]
    },
    {
        "id": "00000056",
        "location": "Opening in woods",
        "description": "You feel the life out of you drain, but the sword gives a little",
        "story_options": [{
                "description": "Continue pulling",
                "next_node_id": "00000057",
                "not_requires": "heartpiece2",
                "chance_of_death": "100",
                "death_description": "The life completely drains from you"
            },
            {
                "description": "Continue pulling",
                "next_node_id": "00000057",
                "requires": "heartpiece2",
                "chance_of_death": "00",
                "death_description": "The life completely drains from you"
            }
        ]
    },
    {
        "id": "00000057",
        "location": "Opening in woods",
        "description": "You feel the life out of you drain even more, but the sword gives again.",
        "story_options": [{
                "description": "Continue pulling",
                "next_node_id": "00000058",
                "not_requires": "heartpiece3",
                "chance_of_death": "100",
                "death_description": "The life completely drains from you as you crumple on the forest floor."
            },
            {
                "description": "Continue pulling",
                "next_node_id": "00000058",
                "requires": "heartpiece3",
                "receives": "mastersword",
                "chance_of_death": "00",
                "death_description": "The life completely drains from you"
            }
        ]
    },
    {
        "id": "00000058",
        "location": "Opening in woods",
        "description": "The sword pulls out, and you fist pump both hands into the air yelling \"I am the master commander!!\".",
        "story_options": [{
            "description": "Leave like a boss",
            "next_node_id": "00000016",
            "chance_of_death": "0",
            "death_description": "The life completely drains from you as you crumple on the forest floor."
        }]
    },
    {
        "id": "00000059",
        "location": "Opening in woods",
        "description": "There's a clearing ahead of you, you see an elegant hole where an elegant sword used to lay",
        "story_options": [{
            "description": "Go back",
            "next_node_id": "00000016",
            "requires": "",
            "chance_of_death": "02",
            "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
        }]
    },
    {
        "id": "00000060",
        "location": "Lone forest",
        "description": "You sit up. The blinding light hits your eyes making you realize you have a splitting headache. After your eyes adjust you look around to see the woods again... You look down at your belly to see a scar... they took your kidney.",
        "story_options": [{
            "description": "Get up",
            "next_node_id": "00000007",
            "requires": "",
            "chance_of_death": "00",
            "death_description": "Your foot hits a trip-wire causing a log to swing into your skull. You bleed to death on the cold forest floor. Boo hoo."
        }]
    }
]
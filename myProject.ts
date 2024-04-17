class MenuItem {
    public name: string = '';
    public price: number = 0;
    public description: string = '';
}

class Pizza extends MenuItem {
    constructor() {
        super();
        this.name = "Pizza";
        this.price = 10; // Example price
        this.description = "Delicious pizza with cheese and tomato sauce";
    }
}

class Burger extends MenuItem {
    constructor() {
        super();
        this.name = "Burger";
        this.price = 8; // Example price
        this.description = "Juicy beef burger with lettuce and tomato";
    }
}

abstract class MenuItemFactory {
    abstract createMenuItem(type: string): MenuItem;
}

class ConcreteMenuItemFactory extends MenuItemFactory {
    createMenuItem(type: string): MenuItem {
        switch (type) {
            case 'Pizza':
                return new Pizza();
            case 'Burger':
                return new Burger();
            // Add more cases as needed
            default:
                throw new Error('Unknown menu item type');
        }
    }
}

class MealBuilder {
    private menuItem: MenuItem;

    constructor(menuItem: MenuItem) {
        this.menuItem = menuItem;
    }

    setPrice(price: number): MealBuilder {
        this.menuItem.price = price;
        return this;
    }

    setDescription(description: string): MealBuilder {
        this.menuItem.description = description;
        return this;
    }

    build(): MenuItem {
        return this.menuItem;
    }
}

// Adapter
interface NewMenuItem {
    getItemDetails(): string;
}

class MenuItemAdapter extends MenuItem implements NewMenuItem {
    getItemDetails(): string {
        return `${this.name}: ${this.description} for $${this.price}`;
    }
}

// Decorator
class MenuItemWithExtras extends MenuItem {
    constructor(private menuItem: MenuItem, public extraDescription: string, public extraPrice: number) {
        super();
        this.name = menuItem.name;
        this.description = `${menuItem.description}, ${extraDescription}`;
        this.price = menuItem.price + extraPrice;
    }
}

// Composite
class MenuComposite {
    private items: MenuItem[] = [];

    addItem(item: MenuItem): void {
        this.items.push(item);
    }

    getPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

// Observer
interface Observer {
    update(subject: PriceChangeNotification): void;
}

class PriceChangeNotification {
    private observers: Observer[] = [];

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

// Strategy
interface PricingStrategy {
    calculatePrice(price: number): number;
}

class HappyHourStrategy implements PricingStrategy {
    calculatePrice(price: number): number {
        return price * 0.8; // 20% discount
    }
}

// Command
class UpdatePriceCommand {
    constructor(private menuItem: MenuItem, private newPrice: number) {}

    execute(): void {
        this.menuItem.price = this.newPrice;
    }
}
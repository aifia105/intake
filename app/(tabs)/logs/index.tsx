import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

type LogEntry = {
  id: string;
  mealName: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  date: string;
  time: string;
};

// Placeholder data – replace with real data from your API/store
const MOCK_LOGS: LogEntry[] = [
  {
    id: "1",
    mealName: "Grilled Chicken Salad",
    calories: 420,
    protein: 38,
    carbs: 18,
    fat: 22,
    date: "Feb 14",
    time: "12:30 PM",
  },
  {
    id: "2",
    mealName: "Oatmeal & Berries",
    calories: 310,
    protein: 12,
    carbs: 52,
    fat: 8,
    date: "Feb 14",
    time: "8:00 AM",
  },
  {
    id: "3",
    mealName: "Salmon & Rice",
    calories: 580,
    protein: 42,
    carbs: 48,
    fat: 20,
    date: "Feb 13",
    time: "7:15 PM",
  },
  {
    id: "4",
    mealName: "Protein Shake",
    calories: 250,
    protein: 30,
    carbs: 20,
    fat: 5,
    date: "Feb 13",
    time: "3:00 PM",
  },
];

function MacroPill({ label, value }: { label: string; value: number }) {
  return (
    <View className="bg-background rounded-lg px-2.5 py-1 mr-2">
      <Text className="text-text-muted text-[10px] font-medium">{label}</Text>
      <Text className="text-text-primary text-xs font-bold">{value}g</Text>
    </View>
  );
}

function LogCard({ item }: { item: LogEntry }) {
  return (
    <View className="bg-card rounded-2xl p-4 mb-3 border border-white/5">
      <View className="flex-row justify-between items-start mb-2">
        <View className="flex-1">
          <Text className="text-text-primary text-base font-semibold">
            {item.mealName}
          </Text>
          <Text className="text-text-muted text-xs mt-0.5">
            {item.date} · {item.time}
          </Text>
        </View>
        <View className="bg-primary/15 rounded-lg px-2.5 py-1">
          <Text className="text-primary text-sm font-bold">
            {item.calories} cal
          </Text>
        </View>
      </View>

      <View className="flex-row mt-2">
        <MacroPill label="Protein" value={item.protein} />
        <MacroPill label="Carbs" value={item.carbs} />
        <MacroPill label="Fat" value={item.fat} />
      </View>
    </View>
  );
}

export default function LogsScreen() {
  const [filter, setFilter] = useState<"all" | "today" | "week">("all");

  const filters = [
    { key: "all" as const, label: "All" },
    { key: "today" as const, label: "Today" },
    { key: "week" as const, label: "This Week" },
  ];

  return (
    <View className="flex-1 bg-background">
      {/* Filter Chips */}
      <View className="flex-row px-4 pt-4 pb-2">
        {filters.map((f) => (
          <TouchableOpacity
            key={f.key}
            onPress={() => setFilter(f.key)}
            className={`rounded-full px-4 py-2 mr-2 ${
              filter === f.key ? "bg-primary" : "bg-card border border-white/10"
            }`}
          >
            <Text
              className={`text-sm font-semibold ${
                filter === f.key ? "text-background" : "text-text-muted"
              }`}
            >
              {f.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Log List */}
      <FlatList
        data={MOCK_LOGS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LogCard item={item} />}
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="items-center justify-center py-20">
            <Text className="text-text-muted text-base">
              No logs yet. Start logging your meals!
            </Text>
          </View>
        }
      />
    </View>
  );
}
